export interface EducationEntry {
  university: string
  city: string
  degree: string
  gpa: string
  dateStart: string
  dateEnd: string
  date: string
  thesis: string
}

export interface ExperienceEntry {
  company: string
  city: string
  position: string
  dateStart: string
  dateEnd: string
  date: string
  description: string
}

export interface LanguageEntry {
  name: string
  level: string
}

export interface ProjectEntry {
  title: string
  tech: string
  description: string
}

export interface CVData {
  template: string
  name: string
  photo: string
  title: string
  phone: string
  birthdate: string
  cityOfBirth: string
  location: string
  website: string
  email: string
  linkedin: string
  github: string
  dribbble: string
  instagram: string
  about: string
  hobbies: string
  education: EducationEntry[]
  experience: ExperienceEntry[]
  volunteer: unknown[]
  publications: string
  skills: string
  languages: LanguageEntry[]
  projects: ProjectEntry[]
  awards: string
  margin: number[]
  paperSize: string
  orientation: string
}
