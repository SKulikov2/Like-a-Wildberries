// DOM элементы

const viewAllLink = document.querySelector('.more');        
const navigationItems = document.querySelectorAll('.navigation-item');
const longGoodsList = document.querySelector('.long-goods-list');


const getGoods = async function () {
    const result = await fetch('db/db.json');
    
    if (!result.ok) {
        throw 'Ошибочка вышла: ' + result.status;
    } else {
        return await result.json();
    }
}

getGoods().then(function (data) {
    console.log(data);
});

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

