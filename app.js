let menu = document.querySelector(".menuMobile").firstElementChild
menu.onclick = function(e){
    e.currentTarget.style.display = 'none'
    document.querySelector("#closeMenu").style.display = 'block'
    document.querySelector("#presentation").style.display = 'none'
    document.querySelector("#listeMobile").style.display = 'block'
}
document.querySelector("#closeMenu").onclick = function(e){
    e.currentTarget.style.display = 'none'
    menu.style.display = 'block'
    document.querySelector("#presentation").style.display = 'block'
    document.querySelector("#listeMobile").style.display = 'none'
}
