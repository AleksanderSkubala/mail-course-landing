<template>
  <footer class="container footer">
    Copyright {{new Date().getFullYear()}} &copy; Aleksander Skubała
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss">
  .footer {
    padding: 20px 30px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background-color: #ededed;
  }
</style>
