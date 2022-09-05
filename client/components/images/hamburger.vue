<template>
  <svg
    width="35px"
    height="30px"
    viewBox="0 0 48 48"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <line x1="-7" y1="17" x2="48" y2="17" stroke-width="3"></line>
      <line x1="-7" y1="31" x2="48" y2="31" stroke-width="3"></line>
    </g>
    <g>
      <line x1="0" y1="24" x2="48" y2="24" stroke-width="1"></line>
      <line x1="0" y1="24" x2="48" y2="24" stroke-width="1"></line>
    </g>
  </svg>
</template>

<style lang="scss">
svg {
  stroke: #000;
  transition: 0.2s;

  g {
    &:first-child {
      opacity: 1;
      transition: opacity 0s 0.2s;

      line {
        transition: transform 0.2s 0.2s;
        transform: translateY(0px);
      }
    }

    &:last-child {
      opacity: 0;
      transition: opacity 0s 0.2s;

      line {
        transition: transform 0.2s;
        transform: rotate(0deg);
        transform-origin: center;
      }
    }
  }
}
</style>