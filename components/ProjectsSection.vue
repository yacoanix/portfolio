<template>
  <section class="projects" id="proyectos" ref="sectionRef">
    <div class="container">
      <p class="eyebrow">Proyectos</p>
      <h2 class="heading">
        Trabajo <span class="gradient-text">reciente</span>
      </h2>

      <div class="projects__empty">
        <p class="projects__empty-title">Próximamente</p>
        <p class="projects__empty-text">
          Estoy preparando proyectos para mostrar aquí. Mientras tanto, puedes
          conocer mi experiencia en la sección
          <a href="#sobre-mi">Sobre mí</a>, en mi
          <a
            href="https://www.linkedin.com/in/aymedeyacoan/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a>
          o contactarme directamente.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.from(sectionRef.value.querySelectorAll('.projects__empty > *'), {
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

.projects__empty {
  margin-top: 3.5rem;
  padding: 3rem;
  border-radius: 1rem;
  border: 1px dashed $border-strong;
  background: $bg-soft;
  text-align: center;
}

.projects__empty-title {
  font-family: $font-mono;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $violet;
  margin-bottom: 0.75rem;
}

.projects__empty-text {
  color: $text-dim;
  line-height: 1.6;
  max-width: 32rem;
  margin-inline: auto;

  a {
    color: $text;
    text-decoration: underline;
    text-decoration-color: rgba(139, 92, 246, 0.5);

    &:hover {
      text-decoration-color: $violet;
    }
  }
}
</style>
