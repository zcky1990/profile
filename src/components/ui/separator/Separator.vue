<script setup lang="ts">
import { Separator as SeparatorRoot, type SeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<SeparatorProps & { class?: string }>()
</script>

<template>
  <SeparatorRoot
    :orientation="props.orientation"
    :decorative="props.decorative"
    :class="cn(
      'shrink-0 bg-border',
      props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full',
      props.class
    )"
  />
</template>
