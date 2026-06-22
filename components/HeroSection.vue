<template>
  <section class="hero">
    <div class="container hero__inner">
      <p class="eyebrow" ref="eyebrowRef">Backend &amp; Full-Stack Developer</p>

      <h1 class="hero__name" ref="nameRef">
        <span class="hero__glow" aria-hidden="true"></span>
        Aymedeyacoan<br />
        Rodriguez Ortega
      </h1>

      <p class="hero__role" ref="roleRef">Backend Developer · Full-Stack</p>

      <p class="hero__tagline" ref="taglineRef">
        Lo que más disfruto no siempre se ve en el repositorio: está en las
        decisiones de arquitectura, en unos requisitos bien definidos y en
        construir backends sólidos y escalables. Combino IA con experiencia
        real para encontrar soluciones eficientes y mantenibles.
      </p>

      <div class="hero__actions" ref="actionsRef">
        <a href="#proyectos" class="btn btn--primary">Ver mi trabajo</a>
        <a href="#contacto" class="btn">Contactar</a>
        <a
          href="https://www.linkedin.com/in/aymedeyacoan/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--linkedin"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const eyebrowRef = ref(null)
const nameRef = ref(null)
const roleRef = ref(null)
const taglineRef = ref(null)
const actionsRef = ref(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })
    .from(eyebrowRef.value, { opacity: 0, y: 16 })
    .from(nameRef.value, { opacity: 0, y: 24 }, '-=0.7')
    .from(roleRef.value, { opacity: 0, y: 16 }, '-=0.6')
    .from(taglineRef.value, { opacity: 0, y: 16 }, '-=0.6')
    .from(actionsRef.value, { opacity: 0, y: 16 }, '-=0.6')
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-block: 6rem;
  position: relative;
}

.hero__inner {
  position: relative;
}

.hero__name {
  position: relative;
  font-size: clamp(2.75rem, 9vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.02;
  margin-bottom: 1.5rem;
}

.hero__glow {
  position: absolute;
  top: 50%;
  left: 10%;
  width: min(60vw, 700px);
  height: min(60vw, 700px);
  transform: translate(-30%, -50%);
  background: radial-gradient(circle, rgba(139, 92, 246, 0.35), rgba(59, 130, 246, 0.18) 45%, transparent 70%);
  filter: blur(40px);
  z-index: -1;
  pointer-events: none;
  animation: breathe 6s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    opacity: 0.7;
    transform: translate(-30%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-30%, -50%) scale(1.15);
  }
}

.hero__role {
  font-family: $font-mono;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: $text;
  background: $gradient;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.25rem;
}

.hero__tagline {
  max-width: 32rem;
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: $text-dim;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn--linkedin {
  border-color: rgba(10, 102, 194, 0.4);
  color: #0a66c2;

  &:hover {
    border-color: #0a66c2;
    background: rgba(10, 102, 194, 0.1);
  }
}
</style>
