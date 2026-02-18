<script setup lang="ts">
import { motion } from 'motion-v'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    /** 'char' | 'word' */
    split?: 'char' | 'word'
    /** Delay between each unit (seconds) */
    stagger?: number
    /** Tag for wrapper (h1, h2, p, span) */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
    class?: string
  }>(),
  {
    split: 'char',
    stagger: 0.03,
    as: 'span',
  }
)

const units = computed(() => {
  if (props.split === 'word') {
    return props.text.split(/\s+/).filter(Boolean)
  }
  return [...props.text]
})
</script>

<template>
  <component
    :is="as"
    :class="props.class"
    class="inline-flex flex-wrap justify-center gap-x-[0.02em]"
    style="font-family: var(--font-display);"
  >
    <!-- character split: each char is a motion.span -->
    <template v-if="split === 'char'">
      <motion.span
        v-for="(ch, i) in units"
        :key="i"
        class="inline-block"
        :initial="{ opacity: 0, y: 12 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{
          duration: 0.35,
          delay: i * stagger,
          ease: [0.22, 1, 0.36, 1],
        }"
      >
        {{ ch === ' ' ? '\u00A0' : ch }}
      </motion.span>
    </template>
    <!-- word split: each word is a motion.span, space between -->
    <template v-else>
      <template v-for="(word, i) in units" :key="i">
        <motion.span
          class="inline-block"
          :initial="{ opacity: 0, y: 14 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.4,
            delay: i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }"
        >
          {{ word }}
        </motion.span>
        <span v-if="i < units.length - 1" class="inline-block" aria-hidden="true">&nbsp;</span>
      </template>
    </template>
  </component>
</template>
