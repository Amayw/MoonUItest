import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('m-button',Button);
Vue.component('m-icon',Icon)
Vue.component('m-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false,
  }
})


import chai from 'chai'
const expect=chai.expect
import spies from 'chai-spies'
chai.use(spies)

//单元测试
{
  //测试icon属性,测试按钮含有icon
  const Constructor=Vue.extend(Button);
  const vm=new Constructor({
    propsData:{
      icon:"right",
    }
  })
  //vm挂载到内存
  vm.$mount()
  let useElement=vm.$el.querySelector('use');
  console.log(useElement);
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-right')
  vm.$el.remove();
  vm.$destroy();
}
//测试loading属性
{
  const Constructor=Vue.extend(Button);
  const vm=new Constructor({
    propsData:{
      icon:"right",
      loading:true
    }
  })
  vm.$mount()
  let useElement=vm.$el.querySelector('use');
  const res=expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$el.remove();
  vm.$destroy();
}
//测试iconPosition属性
{
  const div=document.createElement('div');
  document.body.appendChild(div);
  const Constructor=Vue.extend(Button);
  const vm=new Constructor({
    propsData:{
      icon:"right",
      iconPosition:"right"
    }
  })
  vm.$mount(div)
  let svg=vm.$el.querySelector('svg');
  expect(window.getComputedStyle(svg).order).to.eq('2')
  vm.$el.remove();
  vm.$destroy();
}
{
  const div=document.createElement('div');
  document.body.appendChild(div);
  const Constructor=Vue.extend(Button);
  const vm=new Constructor({
    propsData:{
      icon:"right",
      iconPosition:"left"
    }
  })
  vm.$mount(div)
  let svg=vm.$el.querySelector('svg');
  expect(window.getComputedStyle(svg).order).to.eq('1')
  vm.$el.remove();
  vm.$destroy();
}

//测试click
{
  const Constructor=Vue.extend(Button);
  const vm=new Constructor({
    propsData:{
      icon:"right",
    }
  })
  vm.$mount()
  let spy=chai.spy(()=>{
    console.log(1)
  })
  vm.$on('click',spy)
  vm.$el.click()
  expect(spy).to.have.been.called()
  vm.$el.remove();
  vm.$destroy();
}