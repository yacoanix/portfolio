<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p class="site-footer__copy">
        © {{ year }} Aymedeyacoan Rodriguez Ortega
      </p>

      <div class="site-footer__links">
        <a
          href="https://www.linkedin.com/in/aymedeyacoan/"
          target="_blank"
          rel="noopener noreferrer"
          class="site-footer__link"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          LinkedIn
        </a>
        <a href="mailto:aymedeyacoan@gmail.com" class="site-footer__link">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.site-footer {
  border-top: 1px solid $border;
  padding-block: 2rem;
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-footer__copy {
  font-family: $font-mono;
  font-size: 0.8rem;
  color: $text-faint;
}

.site-footer__links {
  display: flex;
  gap: 1.5rem;
  font-family: $font-mono;
  font-size: 0.85rem;

  .site-footer__link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: $text-dim;
    transition: color 0.25s $ease;

    &:hover {
      color: $text;
    }
  }
}
</style>
