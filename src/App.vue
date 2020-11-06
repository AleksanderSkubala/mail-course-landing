<template>
  <div id="app">
    <WelcomeSection/>
  </div>
</template>

<script>
import WelcomeSection from './components/WelcomeSection.vue';

export default {
  name: 'App',
  components: {
    WelcomeSection,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  body, html {
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Noto Sans', sans-serif;
    font-size: 17px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  img {
    height: auto;
    display: block;
  }

  .container {
    width: 100vw;
    margin-top: 10vw;
  }
</style>
