<template>
  <div class="intro">
    <div class="intro__info">
      <h1>
        Stwórz<br/>
        Swoje<br/>
        Portfolio<br/>
      </h1>
      <Button v-scroll-to="'#purchase'">Zapisz się</Button>
    </div>
    <Illustration class="intro__illustration"/>
  </div>
</template>

<script>
import Illustration from '../assets/graphic.svg';
import Button from '../components/Button.vue';

export default {
  name: 'WelcomeSection',
  components: {
    Illustration,
    Button,
  },
};
</script>

<style lang="scss">
  .intro {
    width: 100vw;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 60px;

    &::after {
      content: '';
      width: 180px;
      height: 180px;
      border: 10px dashed #ededed;
      border-radius: 250px;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto auto;
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 0.9fr 1fr;
      height: 100vh;
      padding: 20px 80px;
    }
  }

  .intro__info {
    text-align: center;
    height: 50vh;

    @media (min-width: 768px) {
      padding-right: 30px;
      text-align: right;
      height: unset;
    }
  }

  .intro__illustration {
    width: 120%;
    height: auto;
    max-height: 70vh;

    @media (min-width: 768px) {
      width: 90%;
      justify-self: start;
    }

    @media (min-width: 1024px) {
      width: 55%;
      justify-self: start;
    }
  }
</style>
