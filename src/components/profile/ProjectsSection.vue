<script setup lang="ts">
import type { CVData } from '@/types/cv'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FolderGit2, Award } from 'lucide-vue-next'

defineProps<{ data: CVData }>()
</script>

<template>
  <section id="projects" class="px-4 py-20 md:py-24">
    <div class="container mx-auto max-w-2xl space-y-14">
      <div v-if="data.projects?.length">
        <h2 class="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
            <FolderGit2 class="size-4" />
          </span>
          Projects
        </h2>
        <ul class="space-y-5">
          <li v-for="(proj, i) in data.projects" :key="i">
            <Card class="overflow-hidden">
              <CardHeader class="pb-2">
                <CardTitle class="text-base font-semibold text-foreground">
                  {{ proj.title }}
                </CardTitle>
                <Badge v-if="proj.tech" variant="secondary" class="mt-2 w-fit rounded-lg px-3.5 py-1 text-xs font-normal">
                  {{ proj.tech }}
                </Badge>
              </CardHeader>
              <CardContent>
                <p class="text-sm leading-[1.7] text-muted-foreground">
                  {{ proj.description }}
                </p>
              </CardContent>
            </Card>
          </li>
        </ul>
      </div>
      <div v-if="data.awards">
        <h2 class="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
            <Award class="size-4" />
          </span>
          Awards
        </h2>
        <Card class="overflow-hidden">
          <CardContent class="py-8">
            <p class="leading-[1.7] text-muted-foreground">{{ data.awards }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
