<template>
  <section class="container description">
    <h1>O co chodzi?</h1>
    <p>Przez mail dostaniesz 10 zadań ze specyfikacją różnych nietypowych projektów, które możesz wykonać.</p>
    <p>Następnie gdy odeślesz link do repozytorium, otrzymasz poprawki wraz z komentarzem i radami na przyszłość.</p>
    <p>W taki sposób możesz zbudować portfolio, które wyróżni się w oczach rekrutera. Dodatkowo do pracy i dalszego rozwoju będzie cię motywować grupa innych adeptów sztuki programowania. 😉</p>
  </section>
</template>

<script>
export default {
  name: 'DescriptionSection',
};
</script>

<style lang='scss'>
  .description {
    padding: 20px 80px;
    text-align: justify;

    p{
      position: relative;

      &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: -5px;
        left: -15px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        transform: rotate(45deg);
        background-color: #FF5500;
      }
    }

    @media (max-width: 768px) {
      padding: 25px;
    }
  }
</style>
