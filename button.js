Vue.component('moon-button',{
  template:`
    <button class="moon-button">按钮</button>
  `
})

let request=new XMLHttpRequest();
request.open('GET','a/b/c',true);
request.onreadystatechange=()=>{
  if(request.readyState===4&&request.status===200){
    console.log(request.responseText);
  }
}

request.send();