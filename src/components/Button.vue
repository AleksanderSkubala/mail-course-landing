<template>
  <button>{{msg}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['msg'],
};
</script>

<style lang="scss">
  button {
    font-size: 1.5em;
    padding: 10px 15px;
    font-family: inherit;
    font-weight: bold;
    background-color: white;
    border: 3px solid #ff5500;
    border-radius: 6px;
    cursor: pointer;
    transition:
      color .2s ease-in-out,
      background-color .2s ease-in-out;
    will-change: color, background-color;
    outline: none;

    &:hover {
      background-color: #ff5500;
      color: white;
    }
  }
</style>
