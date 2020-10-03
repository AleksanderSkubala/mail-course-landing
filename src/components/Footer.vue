<template>
  <p>Copyright {{new Date().getFullYear()}} © Aleksander Skubała</p>
</template>

<style lang="scss" scoped>
  p {
    text-align: center;
    margin-top: 110px;

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
</style>
