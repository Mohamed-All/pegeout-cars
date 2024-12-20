function cars(car){
    const one = document.getElementById('first')
    one.src = car
}

function colors(color){
    const two = document.getElementById('container')
    two.style.backgroundColor = color
    const childernOne = two.querySelectorAll('*')
    childernOne.forEach(childd=>{
        childd.style.color = 'white'
    })
}
function text(){
    const three = document.getElementById('container')
    const childern = three.querySelectorAll('*')
    childern.forEach(child=>{
        child.style.color = 'black'
    })
}

function toggle() {
    const menu = document.getElementById('pop');
    menu.classList.toggle('show');  // إضافة أو إزالة فئة 'show' لعرض القائمة
}
