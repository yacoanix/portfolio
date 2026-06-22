<template>
  <section class="stack" id="stack" ref="sectionRef">
    <div class="container">
      <p class="eyebrow">Stack</p>
      <h2 class="heading">
        Herramientas que <span class="gradient-text">domino</span>
      </h2>

      <div class="stack__groups">
        <div
          v-for="group in groups"
          :key="group.title"
          class="stack__group"
        >
          <h3 class="stack__group-title">{{ group.title }}</h3>
          <ul class="stack__list">
            <li
              v-for="item in group.items"
              :key="item.name"
              class="stack__item"
            >
              <svg
                v-if="item.svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path :d="item.svg" />
              </svg>
              <i v-else :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectionRef = ref(null)

const groups = [
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' }
    ]
  },
  {
    title: 'Frontend',
    items: [
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'jQuery', icon: 'devicon-jquery-plain colored' },
      { name: 'Sass', icon: 'devicon-sass-original colored' }
    ]
  },
  {
    title: 'Mobile / Desktop',
    items: [
      { name: 'NativeScript', svg: 'M1.77 1.76A5.68 5.68 0 0 1 5.8 0h12.6c1.37 0 2.65.6 3.83 1.76A5.43 5.43 0 0 1 24 5.7v12.77c0 1.34-.56 2.58-1.68 3.73A5.77 5.77 0 0 1 18.25 24H5.87a6.3 6.3 0 0 1-4.1-1.57C.69 21.45.1 20.03 0 18.13V5.73a5.21 5.21 0 0 1 1.77-3.97zm6.25 8.3l7.93 10.06h2.12c.49-.06.88-.2 1.17-.43.3-.23.5-.56.64-1v-4.94c.08-.95.67-1.54 1.77-1.75-1.1-.4-1.69-1.02-1.77-1.86V5.42c-.12-.44-.33-.8-.64-1.07a1.83 1.83 0 0 0-1.09-.47H16v10.2L8.02 3.87H5.79c-.56.1-.97.3-1.25.6S4.08 5.25 4 5.9v4.85c-.35.69-.9 1.1-1.65 1.25.85.16 1.4.61 1.65 1.36v4.77c.02.55.2 1 .54 1.37.33.36.7.53 1.1.5H8l.02-9.94z' },
      { name: 'Electron', icon: 'devicon-electron-original colored' }
    ]
  },
  {
    title: 'DevOps / Data',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Apache', icon: 'devicon-apache-plain colored' },
      { name: 'Linux', icon: 'devicon-linux-plain colored' }
    ]
  }
]

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  $gsap.from(sectionRef.value.querySelectorAll('.stack__group'), {
    opacity: 0,
    y: 32,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%'
    }
  })

  $gsap.from(sectionRef.value.querySelectorAll('.stack__item'), {
    opacity: 0,
    y: 12,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.04,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%'
    }
  })
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.stack__groups {
  margin-top: 3.5rem;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stack__group-title {
  font-family: $font-mono;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $text-dim;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid $border;
}

.stack__list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.stack__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: $text;

  i {
    font-size: 1.4rem;
    width: 1.6rem;
    text-align: center;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    flex-shrink: 0;
  }
}
</style>
