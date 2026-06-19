<template>
  <section class="projects" id="proyectos" ref="sectionRef">
    <div class="container">
      <p class="eyebrow">Proyectos</p>
      <h2 class="heading">
        Trabajo <span class="gradient-text">reciente</span>
      </h2>

      <div class="projects__grid">
        <!-- TODO: reemplazar con proyectos reales -->
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.link || '#'"
          class="project-card"
          :class="{ 'project-card--disabled': !project.link }"
        >
          <div class="project-card__top">
            <h3>{{ project.title }}</h3>
            <span class="project-card__arrow" v-if="project.link">&rarr;</span>
          </div>
          <p class="project-card__desc">{{ project.description }}</p>
          <ul class="project-card__stack">
            <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
          </ul>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)

// TODO: sustituir por proyectos reales (título, descripción, stack, enlace)
const projects = [
  {
    title: 'Proyecto Laravel + Vue',
    description: 'Aplicación de gestión interna con backend en Laravel y frontend en Vue.js.',
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    link: ''
  },
  {
    title: 'Plataforma e-commerce',
    description: 'Tienda online con carrito, pasarela de pago y panel de administración.',
    stack: ['PHP', 'jQuery', 'MySQL'],
    link: ''
  },
  {
    title: 'API + Dashboard React',
    description: 'API REST en Node.js consumida por un dashboard construido en React.',
    stack: ['Node.js', 'React', 'PostgreSQL'],
    link: ''
  }
]

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.from(sectionRef.value.querySelectorAll('.project-card'), {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
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
  margin-top: 3.5rem;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: 1rem;
  border: 1px solid $border;
  background: $bg-soft;
  transition: border-color 0.3s $ease, transform 0.3s $ease, box-shadow 0.3s $ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.12);
  }

  &--disabled {
    cursor: default;
    pointer-events: none;
  }
}

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
}

.project-card__arrow {
  font-family: $font-mono;
  color: $violet;
}

.project-card__desc {
  color: $text-dim;
  font-size: 0.92rem;
  line-height: 1.55;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $text-dim;
    padding: 0.3rem 0.65rem;
    border-radius: 999px;
    border: 1px solid $border;
  }
}
</style>
