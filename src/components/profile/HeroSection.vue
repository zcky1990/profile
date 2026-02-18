<script setup lang="ts">
import type { CVData } from '@/types/cv'
import { Button } from '@/components/ui/button'
import SplitText from '@/components/vue-bits/SplitText.vue'
import { Mail, MapPin, Linkedin, Github } from 'lucide-vue-next'

defineProps<{ data: CVData }>()

function normalizeGithub(url: string): string {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `https://${url}`
}
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-muted/60 via-muted/30 to-background px-4 pb-24 pt-28 md:pb-32 md:pt-36">
    <!-- soft radial glow -->
    <div
      class="pointer-events-none absolute -top-24 left-1/2 h-80 w-[32rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(ellipse, oklch(0.7 0.04 260 / 0.15) 0%, transparent 70%);"
    />
    <!-- grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.025]"
      style="background-image: linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px); background-size: 56px 56px;"
    />
    <div class="container relative mx-auto max-w-3xl text-center">
      <p class="animate-in text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Profile
      </p>
      <SplitText
        :text="data.name"
        split="word"
        :stagger="0.06"
        as="h1"
        class="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
      />
      <p class="animate-in delay-2 mt-4 text-xl text-muted-foreground md:text-2xl">
        {{ data.title }}
      </p>
      <p
        v-if="data.location"
        class="animate-in delay-3 mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground"
      >
        <MapPin class="size-4 shrink-0 opacity-75" />
        <span class="max-w-[20ch] sm:max-w-none">{{ data.location }}</span>
      </p>
      <div class="animate-in delay-4 mt-12 flex flex-wrap items-center justify-center gap-3">
        <Button
          v-if="data.email"
          variant="default"
          size="default"
          as="a"
          :href="`mailto:${data.email}`"
          class="gap-2 rounded-full px-6 py-2.5 shadow-md transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
        >
          <Mail class="size-4" />
          Contact
        </Button>
        <Button
          v-if="data.linkedin"
          variant="outline"
          size="default"
          as="a"
          :href="data.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="gap-2 rounded-full px-6 py-2.5 transition-colors duration-200"
        >
          <Linkedin class="size-4" />
          LinkedIn
        </Button>
        <Button
          v-if="data.github"
          variant="outline"
          size="default"
          as="a"
          :href="normalizeGithub(data.github)"
          target="_blank"
          rel="noopener noreferrer"
          class="gap-2 rounded-full px-6 py-2.5 transition-colors duration-200"
        >
          <Github class="size-4" />
          GitHub
        </Button>
      </div>
    </div>
  </section>
</template>
