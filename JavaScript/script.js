const panles = document.querySelectorAll('.panel');

panles.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        remuveActiveClass()
        panel.classList.add('active')
    })
});
function remuveActiveClass(){
    panles.forEach(panel =>{
        panel.classList.remove('active')
    })
}