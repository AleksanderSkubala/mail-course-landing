<template>
  <div class="purchaseSection">
    <h1 id="purchase">Jak dołączyć do warsztatów?</h1>
    <div v-if="!isFinished">
      <p>Jeżeli chcesz wejść w ten projekt i mieć przed sobą świetny (ponad) miesiąc, wykonaj taki przelew (możesz również wysłać mi przez Facebooka jego potwierdzenie):</p>
      <p>
        <b>numer konta:</b> 33 1020 4027 0000 1402 1209 0496<br/>
        <b>Imię i nazwisko:</b> Aleksander Skubała<br/>
        <b>tytuł:</b> PORTFOLIO - <b>[nazwa maila]</b><br/>
        <b>kwota:</b> 100zł<br/>
      </p>
      <p>Ważne żeby nie zapomnieć o mailu - muszę wiedzieć gdzie wysyłać zadania 😉</p>
      <h2>Do końca zapisów pozostało:</h2>
      <flip-countdown class="clock" :deadline="deadline" @timeElapsed="timeElapsedHandler"></flip-countdown>
    </div>
    <div v-if="isFinished">
      <h2>Niestety na ten moment zamkneliśmy zapisy, damy znać w postach gdy wrócimy!</h2>
    </div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';

export default {
  name: 'PurchaseSection',
  components: {
    FlipCountdown,
  },
  data() {
    return {
      isFinished: false,
      deadline: '2020-10-11 20:0:00',
    };
  },
  methods: {
    timeElapsedHandler() {
      this.isFinished = true;
    },
  },
  computed() {
    const today = new Date();
    const deadlineDate = new Date(this.deadline);

    if (today < deadlineDate) this.isFinished = false;
    else if (today === deadlineDate) this.isFinished = false;
    else this.isFinished = true;
  },
};
</script>

<style lang="scss" scoped>
  .purchaseSection {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em;

    @media (max-width: 320px) {
      padding: 2em;
    }
  }

  h1, h2 {
    text-align: center;
  }
</style>
