

const swiper = new Swiper('.header__swiper', {
  loop: true,
  direction: 'vertical',
  pagination: {
    el: '.header-swiper-pagination',
    clickable: true,
  },
});




new Swiper(".news-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      autoplay: {
        delay: 4000, 
      },

  });


const form = document.querySelector('.footer-form');
const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('h2');

// Функция, которая будет выполняться при отправке формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Останавливаем перезагрузку страницы

  // Получаем значение имени из поля ввода
  const nameInput = form.querySelector('input[name="name"]');
  const userName = nameInput.value;

  // Скрываем форму
  form.style.display = 'none';

  // Показываем модальное окно
  modal.style.display = 'block';

  // Заменяем текст заголовка модального окна на обращение к пользователю
  modalTitle.textContent = `Welcome, ${userName}!`;
});



