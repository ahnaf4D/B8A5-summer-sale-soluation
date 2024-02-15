let titleCount = 1;
const cards = document.querySelectorAll('.card');
let totalPrice = 0;
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function () {
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(price);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + ' ' + title;
        titleContainer.appendChild(p);
        titleCount++ ;
        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
}