let body = document.querySelector('body')
let PElems
let pElements

let pElem_1 = document.createElement('p'),
    pElem_2 = document.createElement('p'),
    pElem_3 = document.createElement('p'),
    pElem_4 = document.createElement('p'),
    pElem_5 = document.createElement('p')


body.append(pElem_1, pElem_2, pElem_3, pElem_4, pElem_5)
PElems = document.querySelectorAll('p')

PElems.forEach(element =>{
    element.setAttribute('class', 'p-element')
})

pElements= document.getElementsByClassName('p-element')

for (let i = 0; i < pElements.length; i+=2) {     //even
    pElements[i].innerHTML = "Even"
    pElements[i].style.backgroundColor = 'gray'
    pElements[i].style.color = 'white'
}

for (let i = 1; i < pElements.length; i+=2) {     //odd
    pElements[i].innerHTML = "Odd"
    pElements[i].style.backgroundColor = 'green'
    pElements[i].style.color = 'white'
}
