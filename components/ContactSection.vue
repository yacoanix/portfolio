<template>
  <section class="contact" id="contacto" ref="sectionRef">
    <div class="container contact__inner">
      <div class="contact__intro">
        <p class="eyebrow">Contacto</p>
        <h2 class="heading">
          ¿Me ves en tu <span class="gradient-text">equipo</span>?
        </h2>
        <p class="contact__text">
          Estoy buscando un equipo donde el backend, el análisis técnico y el
          diseño de sistemas sean el corazón del trabajo. Si eso encaja con lo
          que construís, cuéntame.
        </p>
      </div>

      <form class="contact__form" @submit.prevent="onSubmit">
        <div class="field">
          <label for="name">Nombre</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            required
            autocomplete="name"
          />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            required
            autocomplete="email"
          />
        </div>

        <div class="field">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="5"
            required
            placeholder="Cuéntame sobre el puesto o el equipo…"
          ></textarea>
        </div>

        <button type="submit" class="btn btn--primary" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Enviando…' : 'Enviar mensaje' }}
        </button>

        <p v-if="status === 'success'" class="contact__feedback contact__feedback--ok">
          Mensaje enviado. Te responderé pronto.
        </p>
        <p v-if="status === 'error'" class="contact__feedback contact__feedback--error">
          No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)
const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const status = ref('idle') // idle | sending | success | error

async function onSubmit() {
  status.value = 'sending'

  try {
    await $fetch(config.public.contactEndpoint, {
      method: 'POST',
      body: { ...form }
    })

    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    status.value = 'error'
  }
}

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.from(sectionRef.value.querySelectorAll('.contact__intro > *, .field, .btn'), {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.08,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%'
    }
  })
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.contact__inner {
  display: grid;
  gap: 3rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1.2fr;
  }
}

.contact__text {
  margin-top: 1.25rem;
  color: $text-dim;
  line-height: 1.6;
  max-width: 28rem;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: $font-mono;
    font-size: 0.8rem;
    color: $text-dim;
  }

  input,
  textarea {
    background: $bg-soft;
    border: 1px solid $border;
    border-radius: 0.6rem;
    padding: 0.8rem 1rem;
    color: $text;
    transition: border-color 0.25s $ease;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: rgba(139, 92, 246, 0.6);
    }
  }
}

.btn {
  align-self: flex-start;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.contact__feedback {
  font-family: $font-mono;
  font-size: 0.85rem;

  &--ok {
    color: #4ade80;
  }

  &--error {
    color: #f87171;
  }
}
</style>
