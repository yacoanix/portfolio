<template>
  <section class="ai-amplifier" id="ia" ref="sectionRef">
    <div class="container">
      <p class="eyebrow">IA como multiplicador</p>
      <h2 class="heading">
        <span class="gradient-text">Aprendí sin IA.</span><br />Con ella, soy mucho más.
      </h2>
      <p class="ai-amplifier__sub">
        Uso IA a diario en mi proceso de trabajo — no en lo que construyo, sino en cómo pienso y
        desarrollo. El resultado son mejores soluciones técnicas.
      </p>

      <div class="ai-amplifier__cols">
        <div class="ai-card ai-card--base">
          <p class="ai-card__label">Sin IA · La base</p>
          <h3 class="ai-card__title">Criterio propio</h3>
          <ul class="ai-card__list">
            <li>
              <span class="dot" style="background:#4479a1"></span>
              Arquitectura de BBDDs desde cero
            </li>
            <li>
              <span class="dot" style="background:#f9322c"></span>
              APIs REST en Laravel sin scaffolding
            </li>
            <li>
              <span class="dot" style="background:#41b883"></span>
              Componentes Vue.js a mano
            </li>
            <li>
              <span class="dot" style="background:#f05032"></span>
              Deploy manual Apache + Linux
            </li>
            <li>
              <span class="dot" style="background:#9a9aa3"></span>
              Debugging a golpe de razonamiento
            </li>
            <li>
              <span class="dot" style="background:#8b5cf6"></span>
              6 años de proyectos reales
            </li>
          </ul>
          <span class="ai-card__pill">2018 &rarr; hoy</span>
        </div>

        <div class="ai-card ai-card--ai">
          <p class="ai-card__label ai-card__label--accent">Con IA · El salto</p>
          <h3 class="ai-card__title">Más lejos, con más criterio</h3>
          <ul class="ai-card__list">
            <li>
              <span class="dot" style="background:#8b5cf6"></span>
              Exploración de soluciones arquitecturales
            </li>
            <li>
              <span class="dot" style="background:#3b82f6"></span>
              Revisión de código antes de PR
            </li>
            <li>
              <span class="dot" style="background:#41b883"></span>
              Generación y refactor de tests
            </li>
            <li>
              <span class="dot" style="background:#4ade80"></span>
              Mejores decisiones técnicas más rápido
            </li>
            <li>
              <span class="dot" style="background:#8b5cf6"></span>
              Documentación técnica en minutos
            </li>
            <li>
              <span class="dot" style="background:#f59e0b"></span>
              Foco en lógica de negocio, no en ruido
            </li>
          </ul>
          <div class="ai-card__tools">
            <span class="tool-badge">Claude</span>
            <span class="tool-badge">Cursor</span>
            <span class="tool-badge">Copilot</span>
          </div>
        </div>
      </div>

      <div class="ai-amplifier__stats">
        <div class="stat-cell">
          <strong>Mejores soluciones</strong>
          <span>con criterio técnico real</span>
        </div>
        <div class="stat-cell">
          <strong>IA en el proceso</strong>
          <span>no en el producto</span>
        </div>
        <div class="stat-cell">
          <strong>6 años de base</strong>
          <span>más IA como co-piloto</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  if (!$gsap || !$ScrollTrigger) return

  $gsap.registerPlugin($ScrollTrigger)

  const targets = sectionRef.value?.querySelectorAll('.ai-card, .stat-cell')
  if (!targets?.length) return

  $gsap.from(targets, {
    opacity: 0,
    y: 32,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%',
    },
  })
})
</script>

<style scoped lang="scss">
@use '../assets/scss/variables' as *;

.ai-amplifier {
  padding-block: $gap-section;

  &__sub {
    max-width: 38rem;
    color: $text-dim;
    line-height: 1.6;
    margin-top: 1.5rem;
    margin-bottom: 3.5rem;
  }

  &__cols {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__stats {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid $border;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #111115;
  }
}

.ai-card {
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid $border;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &--base {
    background: $bg-soft;
  }

  &--ai {
    background: linear-gradient(180deg, #0e0e10, #12102a);
    border-color: rgba(139, 92, 246, 0.2);
  }

  &__label {
    font-family: $font-mono;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    color: $text-dim;

    &--accent {
      color: $violet;
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $text;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex-grow: 1;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.95rem;
      color: $text;
    }
  }

  &__pill {
    align-self: flex-start;
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $text-dim;
    padding: 0.3rem 0.75rem;
    border: 1px solid $border-strong;
    border-radius: 999px;
  }

  &__tools {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
}

.tool-badge {
  font-family: $font-mono;
  font-size: 0.75rem;
  color: $text-dim;
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 999px;
}

.stat-cell {
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-right: 1px solid $border;

  &:last-child {
    border-right: none;
  }

  strong {
    font-size: 1.25rem;
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
