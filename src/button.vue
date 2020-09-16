<template>
  <button class="m-button" :class='{[`icon-${iconPosition}`]:true}'>
    <m-icon class="loading" name="loading"></m-icon>
    <m-icon v-if="icon" :name="icon" class="m-icon"></m-icon>
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
  @keyframes spin{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .m-button{
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
    >.m-icon{
      order:1;
      margin-right: .3em;
    }

    &.icon-right{
      >.m-icon{
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }
      >.content{
        order: 1;
      }
    }

    >.loading{
      animation: spin 3s linear infinite;
    }
  }

</style>