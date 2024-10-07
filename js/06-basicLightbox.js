import cars from './cars.js';
console.log('🚀 ~ cars:', cars);

const container = document.querySelector('.js-container');
console.log('🚀 ~ container:', container);

const markup = cars.map(
  ({ img, car, id }) => `
    <li data-car-id="${id}" class="js-target js-card">
      <img class="js-target" src="${img}" alt="${car}" width="200">
      <h2 class="js-target">${car}</h2>
    </li>
  `,
);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick);

function onClick(evt) {
  const { target } = evt;

  if (!target.classList.contains('js-target')) {
    return;
  }

  // ?? null undefined
  // || '' 0 null false undefined NaN
  const carId = target.dataset.carId ?? target.closest('.js-card').dataset.carId;
  const currentItem = cars.find(({ id }) => id === Number(carId));

  if (!currentItem) {
    const instance = basicLightbox.create(`
      <div>
        <img src="https://www.shutterstock.com/image-vector/no-image-available-icon-ui-600w-1458092489.jpg" width="300" alt="placeholder">
      </div>
    `);

    instance.show();
    return;
  } else {
    const instance = basicLightbox.create(`
      <div>
        <img src="${currentItem.img}" width="300" alt="${currentItem.car}">
        <div class='carInfo'>
          <h2>${currentItem.car}</h2>
          <h3>${currentItem.type}</h3>
          <p>${currentItem.price}</p>
        </div>
      </div>
    `);

    instance.show();
  }
}
