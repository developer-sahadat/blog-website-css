const minuIcon=document.getElementById('meni-icon');
const menu=document.getElementById('menu');

minuIcon.addEventListener("click", ()=>{
if(menu.className==='hidden'){
    menu.classList.remove('hidden');
}else{
    menu.classList.add('hidden')
}
})