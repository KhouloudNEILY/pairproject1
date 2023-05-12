let opene = document.querySelector('.shopping');
let closee = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');



//add to icons panier
opene.addEventListener('click', ()=>{
    body.classList.add('active');//classLIST is a property of DOMTOKENliST
})


// Close
closee.addEventListener('click', ()=>{
    body.classList.remove('active');
})


// array of our product

let products = [
    {
        id: 1,
        name: 'Hope',
        image: '10923.jpg',
        price: 60
    },
    {
        id: 2,
        name: 'Imagination',
        image: 'IIMAGINATION.jpg',
        price: 60
    },
    {
        id: 3,
        name: 'Rosey',
        image: 'rose rose.jpg',
        price: 60
    },
    {
        id: 4,
        name: 'Samutra',
        image: 'Samutra.jpg',
        price: 40
    },
    {
        id: 5,
        name: 'Rosabella',
        image: 'rosabella.jpg',
        price: 80
    },
    {
        id: 6,
        name: 'Amour',
        image: '11561.jpg',
        price: 80
    },
    {
        id: 7,
        name: 'Misto',
        image: 'mixte.jpg',
        price: 80
    },
    {
        id: 8,
        name: 'Rosavanilla',
        image: 'pale rose.jpg',
        price: 80
    }, 
    {
        id: 9,
        name: 'Coquette',
        image: 'coquettes.jpg',
        price: 80
    },


    {
        id: 10,
        name: 'Belair',
        image: 'belair.jpg',
        price: 80
    },

    {
        id: 11,
        name: 'Boheme',
        image: 'boheme.jpg',
        price: 80
    },
    {
        id: 12,
        name: 'Douceur',
        image: 'white.jpg',
        price: 80
    },

];

let listCards  = [];


function addDiv(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
addDiv();


//ajouter a la cart
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

//recharger la list des produit dans la cart 

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}



function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

console.log('hi')