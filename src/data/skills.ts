export type SkillCategory = { title: string; items: string[]; subtitle?: string }

export const skillsCategories: SkillCategory[] = [
  {
    title: "Android Development",
    items: ["Dependency Injection (Hilt/Dagger)", "MVVM/MVI Patterns", "Android Architecture Components", "Material Design", "Jetpack Compose", "Android (Kotlin/Java)"],
  },
  {
    title: "Flutter Development",
    items: ["Platform Channels", "Widget Development", "State Management (Bloc/Riverpod)", "Cross-platform Development", "Dart Programming", "Flutter Framework"],
  },
  {
    title: "Programming Languages",
    items: ["C/C++", "XML/JSON", "SQL", "Dart", "Java", "Kotlin"],
  },
  {
    title: "Data & Architecture",
    items: ["SOLID Principles", "Clean Architecture", "GraphQL", "RESTful APIs", "SQLite", "Room Database"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Jenkins", "Docker", "Git/GitHub", "CI/CD Pipelines", "AWS Services", "Firebase"],
  },
  {
    title: "UI/UX & Design",
    items: ["Design Systems", "Accessibility", "Responsive Design", "Animation", "Custom Views", "Material Design"],
  },
  {
    title: "Performance & Testing",
    items: ["Profiling Tools", "Proguard/R8", "Memory Management", "UI Testing (Espresso)", "Unit Testing (JUnit)", "Performance Optimization"],
  },
  {
    title: "Business & Leadership Skills",
    items: ["Strategic Thinking – Business strategy and competitive analysis", "Team Leadership – Leading cross-functional teams and mentoring", "Product Management – Product strategy and roadmap planning"],
  },
]
