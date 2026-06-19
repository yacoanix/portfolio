<template>
  <section class="about" id="sobre-mi" ref="sectionRef">
    <div class="container about__inner">
      <div class="about__photo" aria-hidden="true">
        <!-- TODO: añadir foto -->
        <span>Foto próximamente</span>
      </div>

      <div class="about__text">
        <p class="eyebrow">Sobre mí</p>
        <h2 class="heading">
          Detrás del <span class="gradient-text">código</span>
        </h2>

        <p>
          Llevo desde 2018 en el backend: diseñando esquemas de base de datos,
          modelando la lógica de negocio, construyendo APIs en Laravel y
          depurando lo que sea necesario hasta que funciona de verdad. Eso es
          lo que más me llena del trabajo — entender bien el problema antes de
          tocar una línea de código.
        </p>
        <p>
          También tengo frontend sólido en Vue.js y React, lo que me da visión
          completa de una feature de principio a fin. Y con IA integrada en el
          flujo — Claude, Cursor, Copilot — prototipo más rápido, detecto
          errores antes y dedico el foco donde importa: la arquitectura y los
          requisitos.
        </p>
        <p>
          Busco un equipo donde el análisis, el diseño técnico y el backend
          sean el núcleo del trabajo — no un trámite. Me adapto rápido a
          tecnologías nuevas y trabajo en remoto desde Las Palmas de Gran
          Canaria.
        </p>

        <div class="about__stats">
          <div class="about__stat">
            <strong>6+</strong>
            <span>años de experiencia real</span>
          </div>
          <div class="about__stat">
            <strong>Full-Stack</strong>
            <span>PHP · Laravel · Vue · React</span>
          </div>
          <div class="about__stat">
            <strong>Remoto</strong>
            <span>Las Palmas / España</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.from(sectionRef.value.querySelectorAll('.about__photo, .about__text > *'), {
    opacity: 0,
    y: 24,
    duration: 0.8,
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

.about__inner {
  display: grid;
  gap: 2.5rem;
  align-items: start;

  @media (min-width: 800px) {
    grid-template-columns: 260px 1fr;
  }
}

.about__photo {
  aspect-ratio: 1;
  border-radius: 1rem;
  border: 1px dashed $border-strong;
  background: $bg-soft;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: $font-mono;
  font-size: 0.8rem;
  color: $text-faint;
}

.about__text p {
  color: $text-dim;
  line-height: 1.7;
  margin-top: 1.25rem;
  max-width: 38rem;
}

.about__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid $border;
}

.about__stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: $text;
    font-family: $font-display;
  }

  span {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $text-dim;
  }
}
</style>
