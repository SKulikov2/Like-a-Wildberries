// DOM элементы

const viewAllLink = document.querySelector('.more');        
const navigationItems = document.querySelectorAll('.navigation-item');
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

    card.innerHTML = `
        <div class="goods-card">
            <span class="label">New</span>
            <img src="img/image-119.jpg" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">Embroidered Hoodie</h3>
            <p class="goods-description">Yellow/Lilac/Fuchsia/Orange</p>
            <button class="button goods-card-btn add-to-cart" data-id="007">
                <span class="button-price">$89</span>
            </button>
        </div>
    `;

    return card;
};

// Функция для рендеринга карточек

const renderCards = function (data) {
    longGoodsList.textContent = '';
    const cards = data.map(createCard);
    console.log(cards);


    document.body.classList.add('show-goods');
};
renderCards();






// getGoods().then(function (data) {
//     console.log(data);
// });

// Еще 1 вариант работы с fetch

/*
fetch('db/db.json')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
*/

