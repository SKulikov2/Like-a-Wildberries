// DOM элементы

const viewAllLink = document.querySelector('.more');        
const navigationLinks = document.querySelectorAll('.navigation-link');
const longGoodsList = document.querySelector('.long-goods-list');

// Функция для совершения запроса на определенный адрес

const getGoods = async function () {
    const result = await fetch('db/db.json');
    
    if (!result.ok) {
        throw 'Ошибочка вышла: ' + result.status;
    } else {
        return await result.json();
    }
}

// Функция для создания карточки

const createCard = function (objectCard) {
    const card = document.createElement('div');

    card.className = 'col-lg-3 col-sm-6';
    const {label, img, name, description, id, price } = objectCard;

    card.innerHTML = `
        <div class="goods-card">
        ${objectCard.label ? 
            `<span class="label">${label}</span>`:
             ''}
            <img src='db/${img}' alt='${name}' class="goods-image">
            <h3 class="goods-title">${name}</h3>
            <p class="goods-description">${description}</p>
            <button class="button goods-card-btn add-to-cart" data-id='${id}'>
                <span class="button-price">$${price}</span>
            </button>
        </div>
    `;

    return card;
};


// Функция для рендеринга карточек на странице
const renderCards = function (data) {

// Эта переменная есть в DOM, с помощью действия ниже мы затираем содержимое longGoodsList 
    longGoodsList.textContent = '';
    const cards = data.map(createCard);
    longGoodsList.append(...cards);
    document.body.classList.add('show-goods');
};


viewAllLink.addEventListener('click', (event)=> {
    event.preventDefault();
    getGoods().then(renderCards);
});


// Функция фильтрует карточки товаров в зависимости от выбранного фильтра
const filterCards = function (field, value) {
    getGoods().then(function(data) {
        const filteredGoods = data.filter(function(good) {
           return good[field] === value
        })

        return filteredGoods;
    })
    .then(renderCards);
}

// Вызываем функцию через цикл
for (let link of navigationLinks) {
    link.addEventListener('click', (event)=> {
        event.preventDefault();
        const field = link.dataset.field;
        const value = link.textContent;
        filterCards(field, value);

// Нажимая на All снова выводим все товары
        if(!link.dataset.field) {
            getGoods().then(renderCards);
        }
    })
}

// lastNavigationLink.addEventListener('click', (event)=> {
//     event.preventDefault();
    
// })
