<script setup lang="ts">
import type { CVData } from '@/types/cv'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ScrollReveal from '@/components/vue-bits/ScrollReveal.vue'
import { Briefcase } from 'lucide-vue-next'

defineProps<{ data: CVData }>()
</script>

<template>
  <section id="experience" class="border-t border-border/50 bg-muted/25 px-4 py-20 md:py-24">
    <div class="container mx-auto max-w-2xl">
      <ScrollReveal>
      <h2 class="mb-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        <span class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
          <Briefcase class="size-4" />
        </span>
        Experience
      </h2>
      <ul class="space-y-8">
        <li
          v-for="(exp, i) in data.experience"
          :key="i"
          class="relative pl-9 before:absolute before:left-[11px] before:top-6 before:bottom-0 before:w-0.5 before:rounded-full before:bg-primary/20 last:before:hidden"
        >
          <span
            class="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-primary/40 bg-background shadow-sm"
          />
          <Card class="overflow-hidden transition duration-300">
            <CardHeader class="pb-2">
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <CardTitle class="text-lg font-semibold text-foreground">
                    {{ exp.position }}
                  </CardTitle>
                  <p class="mt-1 text-sm font-medium text-muted-foreground">
                    {{ exp.company }}
                  </p>
                  <p class="text-xs text-muted-foreground/90">{{ exp.city }}</p>
                </div>
                <Badge variant="secondary" class="shrink-0 rounded-full px-3.5 py-1 text-xs font-medium">
                  {{ exp.date }}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p class="whitespace-pre-line text-sm leading-[1.7] text-muted-foreground">
                {{ exp.description }}
              </p>
            </CardContent>
          </Card>
        </li>
      </ul>
      </ScrollReveal>
    </div>
  </section>
</template>
