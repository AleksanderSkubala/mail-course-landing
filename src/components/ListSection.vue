<template>
  <div class="container">
    <h1>Na czym to polega?</h1>
    <p>Przez miesiąć dostaniesz 10 maili ze specyfikacją różnych nietypowych projektów, które możesz wykonać. Następnie gdy odeślesz link do repozytorium otrzymasz poprawki wraz z komentarzem i radami na przyszłość. W taki sposób możesz zbudować portfolio, które wyróżni się w oczach rekrutera. Dodatkowo do pracy i dalszego rozwoju będzie cię motywować grupa innych adeptów sztuki programowania. 😉</p>
    <h1>Jaka jest cena warsztatów?</h1>
    <h2>Zyskujesz:</h2>
    <ul>
      <li><span><b>10 orginalnych pomysłów</b> na projekt<br/>Jeżeli kiedyś miałeś pustkę w głowie i nie wiedziałeś co zrobić teraz będziesz wiedział. 😉</span></li>
      <li><span>Solidną podstawe dla <b>portfolio</b>, które wpadnie w oko<br/>Rekruterzy <b>mają dość</b> list To-Do i timerów w portofilach, teraz zrobisz coś co się wyróżni!</span></li>
      <li><span><b>Code review</b> dla każdej aplikacji<br/>Dostaniesz kompletne i szczegółowe spojrzenie na napisany kod (tego nie dostaniesz na Udemy), jak wiadomo najlepsza jest nauka przez praktykę.</span></li>
      <li><span><b>Grupe mastermind</b>, która pomoże się rozwijać<br/>Dzięki grupie na FaceBooku zdobędziesz nowe kontakty, będziesz miał wsparcie i motywację w nauce, dostaniesz podsumowania zadań i ciekawe materiały.</span></li>
      <li><span><b>Umięjetności</b> jakich nie dostaniesz w żadnym kursie!<br/>Kurs na żadnej z popularnych platform nie nauczy cię korzystania z dokumentacji, nie pokaże jak wyszukiwać biblioteki do danych problemów i przede wszystkim w takich kursach nigdy nie ma błędów w kodzie!</span></li>
    </ul>
    <div class="price">
      <h3>Cena warsztatów wynosi:</h3>
      <h2 class="cost">300zł</h2>
      <Button msg="Zapisz się!" v-scroll-to="'#purchase'"/>
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
    padding: 4em;

    @media (max-width: 320px) {
      padding: 2em;
    }
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
