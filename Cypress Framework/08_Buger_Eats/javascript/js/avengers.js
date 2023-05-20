//Array 
var avengers = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff', 'Bruce Banner'];

function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
    })
}