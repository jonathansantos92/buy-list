const buyItems = document.getElementById('buy-items')


function addItem(item){

    if(item === null || item.trim() === ''){
        alert('Por favor, digite um valor')
    }else{

    const uniqueId = `checkbox-${item}`

    const divItem = document.createElement('div')
    divItem.setAttribute('class','item')
    divItem.setAttribute('id', `item-${item}`)

    const divWrapper = document.createElement('div')
    divWrapper.setAttribute('class','item-wrapper')

    const input = document.createElement('input')
    input.setAttribute('type','checkbox')
    input.setAttribute('name',item)
    input.setAttribute('id', uniqueId)
    input.addEventListener('change', () => {strikeLine(uniqueId)})

    const label = document.createElement('label')
    label.setAttribute('for', uniqueId)
    label.textContent = item

    const link = document.createElement('a')
    link.addEventListener('click', () => {removeItem(`item-${item}`)})
    link.setAttribute('class', 'trash-can')

    divWrapper.appendChild(input)
    divWrapper.appendChild(label)
    divItem.appendChild(divWrapper)
    divItem.appendChild(link)

    buyItems.appendChild(divItem)
}   

    const inputItem = document.getElementById('item_name')
    inputItem.value = ''
}

function removeItem(item){
    const itemRemove = document.getElementById(item)
    itemRemove.remove()
    displayMessage()

}

function displayMessage(){
    const message = document.getElementsByClassName('alert')[0]
    message.classList.remove('hide')
}

function hideMessage(){
    const message = document.getElementsByClassName('alert')[0]
    message.classList.add('hide')
}

function strikeLine(item_name){
    
    const input = document.getElementById(item_name)
    const divItem = input.parentElement.parentElement
    const divBuyed = document.getElementById('buyed-items')
    const divBuy = document.getElementById('buy-items')

    console.log('item_name: ',item_name)
    console.log('input: ',input)
    console.log('divItem: ',divItem)
    console.log('divBuyed: ',divBuyed)
    console.log('divBuy: ',divBuy)

    if(input.nextSibling.classList.contains('strike-throught')){
        divBuy.appendChild(divItem)
        input.nextSibling.classList.remove('strike-throught')
        input.nextSibling.removeAttribute('class')
        
    }else{
       input.nextSibling.classList.add('strike-throught')
       divBuyed.appendChild(divItem)
    }
}