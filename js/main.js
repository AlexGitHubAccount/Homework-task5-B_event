'use strict';

//Creat ingredients,price and calories
let tomatoSauce = {name: "соус томатный", price: 5, calories: 8, amount: 1};
let crimeanOnion = {name: "лук крымский", price: 6, calories: 10, amount: 1};
let olives = {name: "оливки", price: 8, calories: 5, amount: 1};
let mozzarella = {name: "сыр моцарелла", price: 15, calories: 30, amount: 1};
let oregano = {name: "орегано", price: 17, calories: 7, amount: 1};
let parsley = {name: "петрушка", price: 4, calories: 3, amount: 1};
let pickledMushrooms = {name: "опята маринованные", price: 20, calories: 28, amount: 1};
let creamSauce = {name: "соус сливочный", price: 6, calories: 6, amount: 1};
let champignon = {name: "шампиньоны", price: 23, calories: 21, amount: 1};
let chickenLeg = {name: "куриный окорок", price: 20, calories: 100, amount: 1};
let pork = {name: "свинина", price: 27, calories: 115, amount: 1};
let cherryTomato = {name: "помидоры черри", price: 16, calories: 14, amount: 1};
let parmesanCheese = {name: "сыр пармезан", price: 18, calories: 25, amount: 1};
let basil = {name: "базилик", price: 7, calories: 5, amount: 1};
let bacon = {name: "бекон", price: 29, calories: 125, amount: 1};
let sweetChiliSauce = {name: "соус свит чили", price: 8, calories: 6, amount: 1};
let pineapples = {name: "ананасы", price: 21, calories: 15, amount: 1};
let bulgarianPepper = {name: "перец болгарский", price: 9, calories: 12, amount: 1};
let tomato = {name: "помидор", price: 14, calories: 11, amount: 1};
let ham = {name: "ветчина", price: 24, calories: 123, amount: 1};
let balyk = {name: "балык", price: 29, calories: 126, amount: 1};

//Create a main set from our pizzas
let arr = [
    {name: "Немецкая", ingredients: {tomatoSauce, crimeanOnion, olives, mozzarella, oregano, parsley, pickledMushrooms}, image: "img/1.jpg"},
    {name: "Новинка", ingredients: {creamSauce, champignon, chickenLeg, pork,crimeanOnion, cherryTomato, mozzarella, parmesanCheese, oregano, basil}, image: "img/2.jpg"},
    {name: "Карбонара",  ingredients: {creamSauce, bacon, crimeanOnion, cherryTomato, mozzarella, parmesanCheese, oregano, basil}, image: "img/3.jpg"},
    {name: "Свит чили", ingredients: {sweetChiliSauce, pork, pineapples, bulgarianPepper,mozzarella, parmesanCheese, oregano, basil }, image: "img/4.jpg"},
    {name: "Беконная", ingredients: {tomatoSauce, mozzarella,tomato, bacon,parmesanCheese, oregano, parsley }, image: "img/5.jpg"},
    {name: "Куриная", ingredients: {sweetChiliSauce, chickenLeg, pineapples, bulgarianPepper, mozzarella, parmesanCheese, oregano, basil }, image: "img/6.jpg"},
    {name: "Крутая", ingredients: {tomatoSauce, mozzarella,tomato, chickenLeg, parmesanCheese, oregano, parsley }, image: "img/7.jpg"},
    {name: "Филона", ingredients: {tomatoSauce, mozzarella,tomato, bacon, chickenLeg, olives, parmesanCheese, oregano, parsley}, image: "img/8.jpg"},
    {name: "Ананасная", ingredients: {tomatoSauce, mozzarella, ham, olives, pineapples,  parmesanCheese, oregano }, image: "img/9.jpg"},
    {name: "Итальянская", ingredients: {tomatoSauce,tomato, chickenLeg, mozzarella, ham, bacon, champignon, bulgarianPepper,  parmesanCheese, oregano, parsley }, image: "img/10.jpg"},
    {name: "Маргарита", ingredients: {tomatoSauce, mozzarella, tomato, oregano}, image: "img/11.jpg"},
    {name: "Вкуснейшая", ingredients: {tomatoSauce, mozzarella,tomato, ham, parmesanCheese, oregano, parsley }, image: "img/12.jpg"},
    {name: "Убойная", ingredients: {tomatoSauce, mozzarella,tomato,bacon, balyk, parmesanCheese, oregano, parsley }, image: "img/13.jpg"},
    {name: "Китайская", ingredients: {creamSauce, champignon, chickenLeg, crimeanOnion, mozzarella, parmesanCheese, oregano }, image: "img/14.jpg"},
    {name: "Ветчинная", ingredients: {tomatoSauce, mozzarella,tomato, ham, crimeanOnion, oregano, parsley }, image: "img/15.jpg"},
];



let allIngredientes = {};
function createAllIngredients(allIngredientes){
    for(let i = 0; i < arr.length; i++){
        for(let ingredient in arr[i].ingredients){
            allIngredientes[ingredient] = arr[i].ingredients[ingredient];
        }
    }
}
createAllIngredients(allIngredientes);
let productsView = 'tile';

let tile = document.querySelector('.tile');
let list = document.querySelector('.list');

tile.addEventListener('click', function(){
    if(productsView != 'tile'){
        productsView = 'tile';
        clearProducts();
        if(filteredArr.length !== 0){
            renderProducts(filteredArr, productsView);
        } else{
            renderProducts(arr, productsView);
        }
    } else{
    }
});
list.addEventListener('click', function(){
    if(productsView != 'list'){
        productsView = 'list';
        clearProducts();
        if(filteredArr.length !== 0){
            renderProducts(filteredArr, productsView);
        } else{
            renderProducts(arr, productsView);
        }
    }
});
function sortNamesToLow(arr){
    arr.sort((a, b) => a.name.replace(/ /g, "") > b.name.replace(/ /g, "") ? 1 : -1);
}
function sortNamesToHigh(arr){
    arr.sort((a, b) => a.name.replace(/ /g, "") < b.name.replace(/ /g, "") ? 1 : -1);
}
function sortPricesToHigh(arr){
    arr.sort((a, b) => a.price - b.price);
}

function sortPricesToLow(arr){
    arr.sort((a, b) => b.price - a.price);
}
let filteredArr = [];
function filterIngredients(checkedIngredientes, arr){
    filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(checkIncludesIngredients(checkedIngredientes, arr[i].ingredients)){
            filteredArr.push(arr[i]);
        }
    }
}
function checkIncludesIngredients(checkedIngredientes, pizzaObj){
    let counter = 0;
    for(let i = 0; i < checkedIngredientes.length; i++){
        if(checkedIngredientes[i] in pizzaObj){
            counter++;
        }
    }
    return counter === checkedIngredientes.length;
}

function clearProducts(){
    let productsCont = document.querySelector('.products-list');
    productsCont.innerHTML = '';
}
let productsList = document.querySelector('.products-list');
function renderProducts(arr, productsView){
    if(productsView === 'tile'){
        for(let i = 0; i < arr.length; i++){
            let productCard = document.createElement("div");
            productCard.classList.add('product-card');
            let cardSideFront = document.createElement("div");
            cardSideFront.classList.add('card-side', 'product-card__front');
            let cardSideBack = document.createElement("div");
            cardSideBack.classList.add("card-side", "product-card__back");
            let productCardName = document.createElement('h4');
            productCardName.classList.add('product-card__name');
            productCardName.innerText = arr[i].name;
            let productCardIngredients = document.createElement('div');
            productCardIngredients.classList.add('product-card__ingredients');
            let productCardIngredientsTitle = document.createElement('span');
            productCardIngredientsTitle.classList.add('product-card__ingredients-title');
            productCardIngredientsTitle.innerText = "Состав: ";
            let ingredientsList = document.createElement('ul');
            for(let key in arr[i].ingredients){
                var ingredient = document.createElement('li');
                if(Object.keys(arr[i].ingredients)[Object.keys(arr[i].ingredients).length - 1] === key){
                    ingredient.innerText = arr[i].ingredients[key].name;
                } else if(Object.keys(arr[i].ingredients)[Object.keys(arr[i].ingredients).length - 1] !== key){
                    ingredient.innerText = arr[i].ingredients[key].name+ ", ";
                }
                ingredientsList.appendChild(ingredient);
            }
            var changeIngredientes = document.createElement('a');
            changeIngredientes.href = '#';
            changeIngredientes.classList.add('product-card__add-ingredients');
            changeIngredientes.innerText = 'Customize...';
            var productCardCalorie = document.createElement('div');
            productCardCalorie.classList.add('product-card__calorie');
            var productCardCalorieTitle = document.createElement('span');
            productCardCalorieTitle.classList.add("product-card__calorie-title");
            productCardCalorieTitle.innerText = "Калорийность: ";
            var caloriesSum = 10;
            for (var key in arr[i].ingredients){
                var productCardCaloresSum = document.createElement('span');
                caloriesSum += arr[i].ingredients[key].calories*arr[i].ingredients[key].amount;
            }
            arr[i].calories = caloriesSum;
            productCardCaloresSum.innerText = caloriesSum + " Ккал.";
            var productCardPrice = document.createElement('h5');
            productCardPrice.classList.add('product-card-price-tile');
            var productCardPriceTitle = document.createElement('span');
            productCardPriceTitle.classList.add('product-card__price-title');
            productCardPriceTitle.innerText = "Цена: ";
            var priceSum = 60;
            for (var key in arr[i].ingredients){
                var productCardPriceValue = document.createElement('span');
                priceSum += arr[i].ingredients[key].price*arr[i].ingredients[key].amount;
            }
            arr[i].price = priceSum;
            productCardPriceValue.innerText = priceSum + " грн.";
            var productCardImg = document.createElement('div');
            productCardImg.classList.add('product-card__img');
            productCardImg.setAttribute("style", "background-image: url(" + arr[i].image + ")");

            productsList.append(productCard);
            productCard.append(cardSideFront);
            productCard.append(cardSideBack);
            cardSideFront.append(productCardName);
            cardSideFront.append(productCardIngredients);
            cardSideFront.append(changeIngredientes);
            cardSideFront.append(productCardCalorie);
            cardSideFront.append(productCardPrice);
            cardSideBack.append(productCardImg);
            productCardIngredients.append(productCardIngredientsTitle);
            productCardIngredients.append(ingredientsList);
            productCardCalorie.append(productCardCalorieTitle);
            productCardCalorie.append(productCardCaloresSum);
            productCardPrice.append(productCardPriceTitle);
            productCardPrice.append(productCardPriceValue);
        }
    } else if (productsView === 'list'){
        for(let i = 0; i < arr.length; i++){
            let productCard = document.createElement("div");
            productCard.classList.add('product-card--list');
            let productCardLogo = document.createElement('div');
            productCardLogo.classList.add('product-card__logo');
            let productCardInfo = document.createElement('div');
            productCardInfo.classList.add('product-card__info');
            let productCardName = document.createElement('h4');
            productCardName.classList.add('product-card__name', 'product-card__name--list');
            productCardName.innerText = arr[i].name;
            let productCardPriceList = document.createElement('h5');
            productCardPriceList.classList.add('product-card-price-list');
            productCardPriceList.innerText = arr[i].price;

            productsList.append(productCard);
            productCard.append(productCardLogo);
            productCard.append(productCardInfo);
            productCardInfo.append(productCardName);
            productCardInfo.append(productCardPriceList);
        }
    }
}
let namesSelect = document.querySelector('.names-select');
let priceSelect = document.querySelector('.price-select');
//сортировка по названию вывод
namesSelect.addEventListener('change', function(){
    if(priceSelect.value !== 'none'){
        priceSelect.value = 'none';
    }
    if (this.value === 'namesToLow'){
        if(filteredArr.length !== 0){
            sortNamesToLow(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortNamesToLow(arr);
            clearProducts();
            renderProducts(arr, productsView);
        }
    } else if (this.value === 'namesToHigh'){
        if(filteredArr.length !== 0){
            sortNamesToHigh(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortNamesToHigh(arr);
            clearProducts();
            renderProducts(arr, productsView);
        }
    }
});
//Sort for price output
priceSelect.addEventListener('change', function(){
    if(namesSelect.value !== 'none'){
        namesSelect.value = 'none';
    }
    if (this.value === 'priceToHigh'){
        if(filteredArr.length !== 0){
            sortPricesToHigh(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortPricesToHigh(arr);
            clearProducts();
            renderProducts(arr, productsView);
        }

    } else if (this.value === 'priceToLow'){
        if(filteredArr.length !== 0){
            sortPricesToLow(filteredArr);
            clearProducts();
            renderProducts(filteredArr, productsView);
        } else if (filteredArr.length === 0){
            sortPricesToLow(arr);
            clearProducts();
            renderProducts(arr, productsView);
        }
    }
});

//Filter for ingredients
let checkedIngredientes = [];
let checkedIngredientesUl = document.querySelector('.products-filter__ingredients-list');
let checkedIngredientesLi = document.querySelectorAll('.products-filter__ingredients-item');
checkedIngredientesUl.addEventListener('click', function(e){
    if (e.target.classList == 'products-filter__checkbox'){
        for (let i = 0; i < checkedIngredientesLi.length; i++){
            if(checkedIngredientesLi[i].querySelector('input').checked){
                checkedIngredientes.push(checkedIngredientesLi[i].querySelector('input').name);
            }
        }
        clearProducts();
        if(namesSelect.value === 'namesToLow'){
            sortNamesToLow(arr);
        } else if (namesSelect.value === 'namesToHigh'){
            sortNamesToHigh(arr);
        } else if(priceSelect.value === 'priceToLow'){
            sortPricesToLow(arr);
        } else if (priceSelect.value === 'priceToHigh'){
            sortPricesToHigh(arr);
        }
        filterIngredients(checkedIngredientes, arr);
        renderProducts(filteredArr, productsView);
        checkedIngredientes = [];
    }
});

renderProducts(arr, productsView);
function renderPopup(target){
    //Inner part of popup
    let titleModal = document.createElement('h5');
    titleModal.classList.add('product-modal__title');
    titleModal.innerText = target.parentElement.querySelector('.product-card__name').innerText;
    let priceCaliriesModal = document.createElement('div');
    priceCaliriesModal.classList.add('product-modal__price-calories');
    let priceModal = document.createElement('div');
    let priceModalText = document.createElement('span');
    priceModalText.innerText = "Цена: ";
    let priceModalValue = document.createElement('span');

    let caloriesModal = document.createElement('div');
    let caloriesModalText = document.createElement('span');
    caloriesModalText.innerText = "Калории: ";
    let caloriesModalValue = document.createElement('span');

    let ingredientsModal = document.createElement('div');
    ingredientsModal.classList.add('product-modal__ingredient-wrapper');
    let compositionModal = document.createElement('span');
    compositionModal.classList.add('product-modal__composition');
    compositionModal.innerText = 'Состав: ';
    let ingredientsModalNotChecked = document.createElement('div');
    let addIngredients = document.createElement('h5');
    addIngredients.classList.add('product-modal__add');
    addIngredients.innerText = 'Добавить ингредиенты';
    ingredientsModalNotChecked.classList.add('product-modal__ingredient-wrapper-bottom');
    for(let i = 0; i< arr.length; i++){
        if(target.parentElement.querySelector('.product-card__name').innerText === arr[i].name){
            let priceSum = 60;
            let caloriesSum = 10;
            for (let key in arr[i].ingredients){
                priceSum += arr[i].ingredients[key].price*arr[i].ingredients[key].amount;
                caloriesSum += arr[i].ingredients[key].calories*arr[i].ingredients[key].amount;
            }
            arr[i].price = priceSum;
            priceModalValue.innerText = arr[i].price + " грн.";
            arr[i].calories = caloriesSum;
            caloriesModalValue.innerText = arr[i].calories + " Ккал.";
            for(let ingredient in arr[i].ingredients){
                if(arr[i].ingredients[ingredient].amount == 1){
                    let ingredientsModalItem = document.createElement('span');
                    ingredientsModalItem.classList.add('product-modal__ingredient-item');
                    ingredientsModalItem.innerText = arr[i].ingredients[ingredient].name + ", ";
                    ingredientsModalItem.dataset.amount = 1;
                    ingredientsModalItem.dataset.name = ingredient;
                    ingredientsModal.append(ingredientsModalItem);
                }
            }
            for (let ingredient in allIngredientes){
                for(let defaultIngredient in arr[i].ingredients){
                    if(arr[i].ingredients[defaultIngredient].name == allIngredientes[ingredient].name){
                        delete allIngredientes[ingredient];
                        break;
                    }
                }
            }
            for(let ingredient in allIngredientes){
                let ingredientsModalItemNotChecked = document.createElement('span');
                ingredientsModalItemNotChecked.classList.add('product-modal__ingredient-item');
                ingredientsModalItemNotChecked.innerText = allIngredientes[ingredient].name + ", ";
                ingredientsModalItemNotChecked.dataset.amount = 0;
                ingredientsModalItemNotChecked.dataset.name = ingredient;
                ingredientsModalNotChecked.append(ingredientsModalItemNotChecked);
            }
        }
    }
    popUpContent.append(titleModal);
    popUpContent.append(priceCaliriesModal);
    priceCaliriesModal.append(priceModal);
    priceModal.append(priceModalText);
    priceModal.append(priceModalValue);
    priceCaliriesModal.append(caloriesModal);
    caloriesModal.append(caloriesModalText);
    caloriesModal.append(caloriesModalValue);
    popUpContent.append(compositionModal);
    popUpContent.append(ingredientsModal);
    popUpContent.append(addIngredients);
    popUpContent.append(ingredientsModalNotChecked);
}
//Movement cards and popup's overlay
let target;
let allCardsTiles = document.querySelector('.products-list');
let overlay = document.querySelector('.overlay');
let popUp = document.querySelector('.pop-up');
let popUpContent = document.querySelector('.pop-up-content');
let body = document.querySelector('body');
if(productsView === 'tile'){
    allCardsTiles.addEventListener( 'click', function(e) {
        if(e.target.closest('.product-card') && e.target.closest('.product-card__add-ingredients') === null){
            e.target.closest('.product-card').classList.toggle('rotated');
        } else if(e.target.closest('.product-card__add-ingredients')){
            createAllIngredients(allIngredientes);
            target = e.target;
            overlay.classList.add('visible');
            body.classList.add('overflow');
            renderPopup(target);
        }
    });
}
popUpContent.addEventListener('click', function(e){
    if(e.target.classList == 'product-modal__ingredient-item'){
        for(let i = 0; i< arr.length; i++){
            if(target.parentElement.parentElement.querySelector('.product-card__name').innerText === arr[i].name){
                if(e.target.dataset.amount == '1'){
                    allIngredientes[e.target.dataset.name] = arr[i].ingredients[e.target.dataset.name];
                    delete arr[i].ingredients[e.target.dataset.name];

                } else if( e.target.dataset.amount == '0'){
                    arr[i].ingredients[e.target.dataset.name] = allIngredientes[e.target.dataset.name];
                }
            }
        }
        popUpClear();
        renderPopup(target);
    }
});
//close popup
let popupClose = document.querySelector('.pop-up__close');
popupClose.addEventListener('click', function(){
    clearProducts();
    renderProducts(arr,productsView);
    overlay.classList.remove('visible');
    body.classList.remove('overflow');
    popUpClear();
});

//clean popup
function popUpClear(){
    popUpContent.innerText = '';
}
