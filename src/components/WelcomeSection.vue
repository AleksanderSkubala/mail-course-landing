<template>
  <div class="container">
    <div class="content">
      <h1>Stwórz swoje portfolio</h1>
      <p>Zapisz się i przez ponad miesiąc twórz różne projekty, ucząc się i wzbogacajać swoje CV!</p>
      <Button msg="Zapisz się!" class="button" v-scroll-to="'#purchase'"/>
    </div>
    <div class="graphic">
      <Ilustration />
      <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#CC3300" d="M47,-39.4C58.4,-23.2,63.4,-3.8,58.2,10.9C53,25.6,37.5,35.7,24.7,35.8C12,36,2,26.3,-13.3,21.4C-28.7,16.4,-49.3,16.2,-57.2,6.1C-65,-4.1,-60.2,-24.1,-48.5,-40.4C-36.8,-56.6,-18.4,-69.2,-0.3,-69C17.8,-68.7,35.6,-55.7,47,-39.4Z" transform="translate(100 100)" /></svg>
    </div>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,96L40,106.7C80,117,160,139,240,165.3C320,192,400,224,480,202.7C560,181,640,107,720,96C800,85,880,139,960,176C1040,213,1120,235,1200,208C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
  </div>
</template>

<script>
import Ilustration from '@/assets/Ilustration.svg';
import Button from './Button.vue';

export default {
  components: {
    Ilustration,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  text-align: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  padding: 10vw;
  display: flex;
  flex-direction: column;

  .waves {
    position: absolute;
    bottom: 0;
    left: 0;

    @media (min-width: 2560px) {
      display: none;
    }
  }
}

.content {
  text-align: left;
}

.graphic {
  position: relative;
  width: 70vw;
  align-self: center;
  justify-self: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 40vw;
    margin-top: 0;
    align-self: flex-end;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }

  @media (min-width: 1440px) {
    width: 25vw;
  }
}

.blob {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
}

.button {
  margin-top: 20px;
}
</style>
