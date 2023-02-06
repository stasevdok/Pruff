const headercontainer = document.querySelector('.headercontainer')

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 1){
        headercontainer.classList.add('active')
    }
    else {
        headercontainer.classList.remove('active')
    }
}

