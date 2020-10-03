<template>
  <div id="app">
    <WelcomeSection/>
  </div>
</template>

<script>
import WelcomeSection from '@/components/WelcomeSection.vue';

export default {
  name: 'App',
  components: {
    WelcomeSection,
  },
};
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>
