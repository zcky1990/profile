<script setup lang="ts">
import type { CVData } from '@/types/cv'
import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap } from 'lucide-vue-next'

defineProps<{ data: CVData }>()
</script>

<template>
  <section id="education" class="px-4 py-20 md:py-24">
    <div class="container mx-auto max-w-2xl">
      <h2 class="mb-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        <span class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
          <GraduationCap class="size-4" />
        </span>
        Education
      </h2>
      <ul class="grid gap-5 sm:grid-cols-2">
        <li v-for="(edu, i) in data.education" :key="i">
          <Card class="h-full overflow-hidden">
            <CardHeader class="pb-2">
              <div class="flex flex-col gap-2">
                <CardTitle class="text-base font-semibold text-foreground">
                  {{ edu.degree }}
                </CardTitle>
                <p class="text-sm font-medium text-muted-foreground">
                  {{ edu.university }}
                </p>
                <p class="text-xs text-muted-foreground/90">{{ edu.city }}</p>
                <Badge v-if="edu.date" variant="secondary" class="mt-2 w-fit rounded-full px-3.5 py-1 text-xs font-medium">
                  {{ edu.date }}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        </li>
      </ul>
    </div>
  </section>
</template>
