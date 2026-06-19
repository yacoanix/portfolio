<template>
  <section class="hero">
    <div class="container hero__inner">
      <p class="eyebrow" ref="eyebrowRef">Disponible · Backend &amp; Full-Stack Developer</p>

      <h1 class="hero__name" ref="nameRef">
        <span class="hero__glow" aria-hidden="true"></span>
        Aymedeyacoan<br />
        Rodriguez Ortega
      </h1>

      <p class="hero__role" ref="roleRef">Backend Developer · Full-Stack</p>

      <p class="hero__tagline" ref="taglineRef">
        Lo que más disfruto no se ve en el repositorio. Está en las decisiones
        de arquitectura, en los requisitos bien trabajados y en el backend
        sólido que escala. Uso IA junto con mi experiencia para alcanzar las
        mejores soluciones.
      </p>

      <div class="hero__actions" ref="actionsRef">
        <a href="#proyectos" class="btn btn--primary">Ver mi trabajo</a>
        <a href="#contacto" class="btn">Contactar</a>
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
</style>
