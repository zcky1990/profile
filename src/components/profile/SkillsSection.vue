<script setup lang="ts">
import type { CVData } from '@/types/cv'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Languages } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{ data: CVData }>()

const skillGroups = computed(() => {
  const raw = props.data.skills || ''
  const lines = raw.split('\n').filter(Boolean)
  return lines.map((line) => {
    const [label, ...rest] = line.split(':')
    const value = rest.join(':').trim()
    const tags = value ? value.split(',').map((s) => s.trim()) : []
    return { label: label?.trim() || '', tags }
  }).filter((g) => g.label || g.tags.length)
})
</script>

<template>
  <section id="skills" class="border-t border-border/50 bg-muted/25 px-4 py-20 md:py-24">
    <div class="container mx-auto max-w-2xl space-y-14">
      <div>
        <h2 class="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
            <Code2 class="size-4" />
          </span>
          Skills
        </h2>
        <Card class="overflow-hidden">
          <CardHeader class="pb-2">
            <CardTitle class="text-base font-semibold text-foreground">Technical</CardTitle>
          </CardHeader>
          <CardContent class="flex flex-wrap gap-2.5">
            <template v-for="(group, gi) in skillGroups" :key="gi">
              <template v-for="(tag, ti) in group.tags" :key="`${gi}-${ti}`">
                <Badge v-if="tag" variant="secondary" class="rounded-lg px-3.5 py-1.5 font-normal shadow-sm">
                  {{ tag }}
                </Badge>
              </template>
            </template>
          </CardContent>
        </Card>
      </div>
      <div v-if="data.languages?.length">
        <h2 class="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
            <Languages class="size-4" />
          </span>
          Languages
        </h2>
        <Card class="overflow-hidden">
          <CardContent class="flex flex-wrap gap-2.5 py-6">
            <Badge
              v-for="(lang, i) in data.languages"
              :key="i"
              variant="outline"
              class="rounded-lg px-3.5 py-1.5 font-normal"
            >
              {{ lang.name }} — {{ lang.level }}
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
