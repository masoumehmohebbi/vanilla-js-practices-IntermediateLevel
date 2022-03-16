let $ = document,
    select = $.querySelector('select'),
    firstOption,
    secondOption,
    thiredOption

firstOption = $.createElement('option')
secondOption = $.createElement('option')
thiredOption = $.createElement('option')

firstOption.innerHTML = "One"
secondOption.innerHTML = "Two"
thiredOption.innerHTML = "Three"

select.append(firstOption, secondOption, thiredOption)

console.log(select)
select.setAttribute('myAttr', "23")
console.log('my Attribute => ', select.getAttribute('myAttr'))


console.log('hasAttribute => ', select.hasAttribute('myAttr'))

function changeHandler() {
    console.log('change => ', select.value) 
}

select.addEventListener('change', changeHandler) 

