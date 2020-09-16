<template>
 <div class="m-button-group">
   <slot></slot>
 </div>
</template>

<script lang="ts">
  export default {
    mounted() {
      for(let node of this.$el.children){
        let name=node.nodeName.toLowerCase();
        if(name!=='button'){
          console.warn(`m-button-group的子元素应该是button,而不是${name}`);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.m-button-group{
  display:inline-flex;
  vertical-align: top;
  border-radius: 4px;
  >.m-button{
    border-radius: 0;
    margin-left: -1px;
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>