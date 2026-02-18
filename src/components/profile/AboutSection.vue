<script setup lang="ts">
import type { CVData } from '@/types/cv'
import ScrollReveal from '@/components/vue-bits/ScrollReveal.vue'
import { computed } from 'vue'

const props = defineProps<{ data: CVData }>()

const stats = computed(() => {
  const exp = props.data.experience || []
  const companies = new Set(exp.map((e) => e.company)).size
  const firstJob = exp.length
    ? exp.reduce((earliest, e) => {
        const d = e.dateStart ? new Date(e.dateStart).getFullYear() : 0
        return d && (earliest === 0 || d < earliest) ? d : earliest
      }, 0)
    : 0
  const currentYear = new Date().getFullYear()
  const yearsExp = firstJob ? Math.max(1, currentYear - firstJob) : 0
  return [
    { value: yearsExp, label: 'Years Experience', suffix: '+' },
    { value: companies, label: 'Companies' },
    { value: (props.data.projects || []).length, label: 'Projects' },
    { value: (props.data.education || []).length, label: 'Degrees' },
  ]
})
</script>

<template>
  <section id="about" class="relative overflow-hidden border-t border-border/50 bg-muted/20 px-4 py-20 md:py-28">
    <!-- Plus-sign pattern with radial fade (fintech About 8 style) -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.06]"
      style="mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 70%); -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 70%);"
      aria-hidden="true"
    >
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="about-plus-pattern"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z"
              fill="currentColor"
              class="text-foreground"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-plus-pattern)" />
      </svg>
    </div>

    <div class="container relative mx-auto max-w-4xl">
      <ScrollReveal>
        <!-- Headline + subheading -->
        <div class="mb-12 text-center md:mb-16">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            About
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {{ data.name }}
          </h2>
          <p class="mt-3 text-lg text-muted-foreground md:text-xl">
            {{ data.title }}
          </p>
        </div>

        <!-- Stats row (bordered, monospace numbers) -->
        <div
          class="mb-14 grid grid-cols-2 gap-px rounded-xl border border-border bg-border md:mb-16 md:grid-cols-4"
        >
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="flex flex-col items-center justify-center gap-1 bg-card px-4 py-8 md:py-10"
          >
            <span
              class="font-mono text-3xl font-bold tabular-nums text-foreground md:text-4xl"
            >
              {{ stat.value }}{{ stat.suffix ?? '' }}
            </span>
            <span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {{ stat.label }}
            </span>
          </div>
        </div>

        <!-- Mission / Overview narrative -->
        <div class="rounded-2xl border border-border/80 bg-card p-6 shadow-sm md:p-10">
          <h3 class="mb-6 text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Overview
          </h3>
          <p
            class="text-base leading-[1.8] text-muted-foreground [text-wrap:balance] md:text-lg"
          >
            {{ data.about }}
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
