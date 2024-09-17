var next = document.getElementById('next')
var previous = document.getElementById('previous')

function show(x){
    
    var array = document.getElementsByTagName('p')
    if(x<0){
        x=array.length
    }
    if(x>array.length){
        x=0
    }
    for (var i = 0;i<array.length;i++){
        array[i].style.display = 'none'
    }

array[x].style.display = 'block'

}
function nextp (x){
    show(x=x+1)
}
function previousp (x){
    show(x=x-1)
}