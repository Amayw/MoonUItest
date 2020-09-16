<template>
  <button class="moon-button" :class='{[`icon-${iconPosition}`]:true}'>
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
export default{
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left' || value === 'right';
      }
    },

  }
}
</script>

<style lang="scss" scoped>
  .moon-button{
    height:var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    background: var(--button-bg);
    display:inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align:top;
    &:hover{
      border-color:var(--border-color-hover);
    }
    &:active{
      background-color: var(--button-active-bg);
    }
    &:focus{
      outline:none;
    }
    >.content{
      order: 2;
    }
    >.icon{
      order:1;
      margin-right: .3em;
    }

    &.icon-right{
      >.icon{
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }
      >.content{
        order: 1;
      }

    }
  }

</style>