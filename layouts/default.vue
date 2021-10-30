<template>
  <div class="container">
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <span class="author-name">
        Daniel Vieira
      </span>
      <a :href="githubLink">
        Source (GitHub)
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const title = ref<string>('Order split');
    const githubLink = ref<string>('https://github.com/danielgsvieira/order-split');

    return {
      githubLink,
      title,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables';

.container {
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 3rem 1fr 2rem;

  header {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border-bottom: 1px solid #EBEBEB;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  footer {
    background-color: #F1F3F4;
    padding: 0 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: $lightText;
    font-size: 0.8rem;

    a {
      color: $lightText;
    }
  }
}
</style>
