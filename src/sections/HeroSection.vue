<template>
  <section class="container hero">
    <p class="hero__content">
      <b>Nie mogę zagwarantować Ci sukcesu,</b> ale jeżeli podjemiesz działanie podczas warsztatów do gwarantuje, że zobaczysz postęp!
    </p>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style lang="scss">
  .hero {
    min-height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;

    background-image: url('../assets/codingImage.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: 50%;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      opacity: .6;
      z-index: 1;
    }
  }

  .hero__content {
    width: 70%;
    position: relative;
    z-index: 2;
  }
</style>
