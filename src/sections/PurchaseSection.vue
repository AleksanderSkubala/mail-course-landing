<template>
  <section class="container purchase" id="purchase">
    <h1>Jak dołączyć?</h1>
    <h4>To bardzo proste! Wykonaj przelew o danych:</h4>
    <p>
      <b>numer konta:</b> 33 1020 4027 0000 1402 1209 0496<br/>
      <b>Imię i nazwisko:</b> Aleksander Skubała<br/>
      <b>tytuł:</b> WARSZTATY - <b>nazwa maila</b><br/>
    </p>
    <h3>150 zł</h3>
  </section>
</template>

<script>
export default {
  name: 'PurchaseSection',
};
</script>

<style lang="scss">
  .purchase {
    padding: 20px 30px;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 260px;
      height: 260px;
      background-color: #ff8833;
      border-radius: 30px;
      transform: translateX(-40%) rotate(45deg);
    }

    @media (min-width: 768px) {
      padding: 20px 80px;
    }
  }
</style>
