var colors = document.getElementsByClassName('colors');

for(i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', changecolor)
}

function changecolor(){
    var color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color',color)
}