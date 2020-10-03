<template>
  <div class="container">
    <h1>Na czym to polega?</h1>
    <p>Przez miesiąć dostaniesz 10 maili ze specyfikacją różnych nietypowych projektów, które możesz wykonać. Następnie gdy odeślesz link do repozytorium otrzymasz poprawki wraz z komentarzem i radami na przyszłość. W taki sposób możesz zbudować portfolio, które wyróżni się w oczach rekrutera. Dodatkowo do pracy i dalszego rozwoju będzie cię motywować grupa innych adeptów sztuki programowania. 😉</p>
    <h1>Jaka jest cena warsztatów?</h1>
    <h2>Zyskujesz:</h2>
    <ul>
      <li><span><b>10 orginalnych pomysłów</b> na projekt</span></li>
      <li><span>Solidną podstawe dla <b>portfolio</b>, które wpadnie w oko</span></li>
      <li><span><b>Code review</b> dla każdej aplikacji</span></li>
      <li><span><b>Grupe mastermind</b>, która pomoże się rozwijać</span></li>
      <li><span><b>Umięjetności</b> jakich nie dostaniesz w żadnym kursie!<br/>- np. praca z dokumentacją, szukanie bibliotek</span></li>
    </ul>
    <div class="price">
      <h3>Cena warsztatów wynosi:</h3>
      <h2 class="cost">100zł</h2>
      <Button msg="Zapisz się!"/>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'ListSection',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
  .container {
    padding: 2em;
  }

  p {
    line-height: 1.5;
  }

  h1 {
    text-align: center;
    color: #ff5500;
    margin: 1.5em 0;
  }

  .cost {
    color: gray;
  }

  .price {
    text-align: center;
    margin: 4em 0;
  }
</style>
