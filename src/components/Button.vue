<template>
  <button class="customButton">
    <slot/>
  </button>
</template>

<style lang="scss">
  .customButton {
    padding: 12px 35px;
    background: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    position: relative;
    z-index: 999;
    border: none;
    outline: none;
    cursor: pointer;
    letter-spacing: 3px;

    &::before, &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 10px;

      transition: transform .2s ease-in-out;
      will-change: transform;
    }

    &::before {
      z-index: -2;
      background-color: #ff8833;
      top: 3px;
      left: -3px;
    }

    &::after {
      z-index: -1;
      border: 2px solid black;
      top: -3px;
      left: 3px;
    }

    &:hover {
      &::before {
        transform: translateX(3px) translateY(-3px);
      }

      &::after {
        transform: translateX(-3px) translateY(3px);
      }

    }
  }
</style>
