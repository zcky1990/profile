<script setup lang="ts">
import { motion } from 'motion-v'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Amount to move from (px) */
    y?: number
    /** Fade in */
    opacity?: boolean
    /** Root margin for in-view (e.g. '0px 0px -80px 0px') */
    rootMargin?: string
    /** Once or every time */
    once?: boolean
    /** Delay (seconds) before animating */
    delay?: number
    class?: string
  }>(),
  {
    y: 24,
    opacity: true,
    rootMargin: '0px 0px -60px 0px',
    once: true,
    delay: 0,
  }
)

const inViewOpts = computed(() => ({
  once: props.once,
  margin: props.rootMargin as `${number}px ${number}px ${number}px ${number}px`,
  amount: 0.2 as const,
}))
</script>

<template>
  <motion.div
    :class="props.class"
    :initial="{ opacity: props.opacity ? 0 : 1, y: props.y }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="inViewOpts"
    :transition="{
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: props.delay,
    }"
  >
    <slot />
  </motion.div>
</template>
