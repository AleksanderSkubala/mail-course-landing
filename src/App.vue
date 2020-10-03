<template>
  <div id="app">
    <WelcomeSection/>
    <ListSection/>
    <PurchaseSection/>
    <Footer/>
  </div>
</template>

<script>
import WelcomeSection from '@/components/WelcomeSection.vue';
import ListSection from '@/components/ListSection.vue';
import PurchaseSection from '@/components/PurchaseSection.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    WelcomeSection,
    ListSection,
    PurchaseSection,
    Footer,
  },
};
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
  overflow-x: hidden;
}

*, *::before, *::after {
  box-sizing: border-box;
}

ul {
  list-style-type: circle;
  font-size: 1.1em;

  li {
    color: #ff5500;
    margin-bottom: 7px;

    span {
      color: black;
    }
  }
}
</style>
