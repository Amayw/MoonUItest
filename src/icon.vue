<template>
  <svg class="m-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script lang="ts">
  import './svg'
export default{
  props:['name']
}
</script>

<style lang="scss" scoped>
  .m-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>