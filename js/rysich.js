// console.log(_); // Весь об'єкт бібліотеки Lodash

// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// ========================================================
const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);
function onClick(evt) {
  // console.log(evt.currentTarget.dataset.color);
  if (!evt.target.classList.contains('js-box')) {
    return;
  }

  console.dir(evt.currentTarget);
  console.dir(evt.target);
  console.log(evt.target.dataset.color);
}

// ============================================================
// Перерва до 21.20

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// console.log(instance);
// instance.show();

// ====================================================================
