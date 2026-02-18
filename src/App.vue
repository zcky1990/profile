<script setup lang="ts">
import cvData from '@/data/cv-data.json'
import type { CVData } from '@/types/cv'
import HeroSection from '@/components/profile/HeroSection.vue'
import AboutSection from '@/components/profile/AboutSection.vue'
import ExperienceSection from '@/components/profile/ExperienceSection.vue'
import EducationSection from '@/components/profile/EducationSection.vue'
import SkillsSection from '@/components/profile/SkillsSection.vue'
import ProjectsSection from '@/components/profile/ProjectsSection.vue'

const profile = cvData as CVData
</script>

<template>
  <div class="min-h-screen bg-background antialiased">
    <main>
      <HeroSection :data="profile" />
      <AboutSection :data="profile" />
      <ExperienceSection :data="profile" />
      <EducationSection :data="profile" />
      <SkillsSection :data="profile" />
      <ProjectsSection :data="profile" />
    </main>
    <footer class="mt-4 border-t border-border/50 py-10 text-center text-sm text-muted-foreground">
      <p class="font-medium">© {{ new Date().getFullYear() }} {{ profile.name }}</p>
    </footer>
  </div>
</template>
