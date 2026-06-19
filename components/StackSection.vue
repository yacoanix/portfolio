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
              <i :class="item.icon"></i>
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
    grid-template-columns: repeat(3, 1fr);
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
}
</style>
