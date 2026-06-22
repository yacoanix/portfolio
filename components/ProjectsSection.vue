<template>
  <section class="projects" id="proyectos" ref="sectionRef">
    <div class="container">
      <p class="eyebrow">Proyectos</p>
      <h2 class="heading">
        Trabajo <span class="gradient-text">reciente</span>
      </h2>

      <div class="projects__grid">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
        >
          <p class="project-card__title">{{ project.name }}</p>
          <p class="project-card__desc">{{ project.description }}</p>
          <ul class="project-card__tags">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
          <span class="project-card__link">Ver en GitHub →</span>
        </a>

        <div class="project-card project-card--soon">
          <p class="project-card__title">Más proyectos</p>
          <p class="project-card__desc">Próximamente. Estoy preparando más trabajo para mostrar aquí.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)

const projects = [
  {
    name: 'Portfolio',
    description: 'Este sitio: portfolio personal construido con Nuxt, animaciones con GSAP y diseño propio en SCSS.',
    tags: ['Nuxt', 'Vue.js', 'GSAP', 'SCSS'],
    url: 'https://github.com/yacoanix/portfolio'
  }
]

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.from(sectionRef.value.querySelectorAll('.project-card'), {
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%'
    }
  })
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.projects__grid {
  margin-top: 2.5rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid $border;
  background: $bg-soft;
  text-decoration: none;
  transition: border-color 0.25s $ease, transform 0.25s $ease;

  &:hover {
    border-color: $border-strong;
    transform: translateY(-4px);
  }
}

.project-card--soon {
  border-style: dashed;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    transform: none;
  }

  .project-card__title {
    color: $text-dim;
  }
}

.project-card__title {
  font-family: $font-mono;
  font-size: 1.05rem;
  color: $text;
}

.project-card__desc {
  color: $text-dim;
  line-height: 1.6;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;

  li {
    font-family: $font-mono;
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    color: $violet;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 1px solid $border;
  }
}

.project-card__link {
  margin-top: auto;
  font-family: $font-mono;
  font-size: 0.85rem;
  color: $text;

  .project-card:hover & {
    color: $violet;
  }
}
</style>
