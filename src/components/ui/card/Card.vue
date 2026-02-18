<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn(
      'rounded-2xl border border-border/80 bg-card text-card-foreground shadow-sm transition-[box-shadow,transform] duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5',
      props.class
    )"
  >
    <slot />
  </div>
</template>
