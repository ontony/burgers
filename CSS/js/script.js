/////скроллинг скроллом

const maincontent = $('.maincontent');
const section = $('.section');
let inScroll = false;
// const md = new MobileDetect(window.navigator.userAgent); //Это переменная - скрип проверяющая мобильный или нет
// const isMobile = md.mobile(); // вернет нам true на мобильных и false если десктоп


///////функция ставящая кружочки согласно открытой странице
const setDot = itemEq => {
  $('.pagination__item')
    .eq(itemEq)
    .addClass('pagination__item-active')
    .siblings()
    .removeClass('pagination__item-active');
}


/////////// performTransition - функция что меняет положение скролла
// 
const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if (inScroll === false) {

    inScroll = true;

    maincontent.css({
      transform: `translateY(${position})`
    })

    section
      .eq(sectionEq)
      .addClass('active')
      .siblings()
      .removeClass('active');

    setTimeout(() => {
      inScroll = false;
      setDot(sectionEq); ///вызываем функцию разставляющую точки
    }, 1000 + 300); //////время за которое листается сладер + 300 на задержку скролла
  }



};

const scrollToSection = direction => {
  const activeSection = section.filter('.active');
  const prevSection = activeSection.prev();
  const nextSection = activeSection.next();

  if (direction === 'up' && prevSection.length) {
    performTransition(prevSection.index());
  }
  if (direction == 'down' && nextSection.length) {
    performTransition(nextSection.index());
  }
}


$(document).on('wheel', e => {
  // console.log(e.originalEvent.deltaY);


  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) { //вниз
    scrollToSection('down');

    console.log('down');
  }

  if (deltaY < 0) { //вверх
    scrollToSection('up');

    console.log('up');
    // performTransition(0);


  }
})
/////Обрабатываем нажатие клавиш вниз и вверх через аски код
$(document).on('keydown', e => {
  console.log(e.keyCode);

  switch (e.keyCode) {
    case 40:
      scrollToSection('down');
      break;

    case 38:
      scrollToSection('up');
  }

})

//функция котора перескроливает при нажатии на кнопки меню

$('[data-scroll-to]').on('click', e => { ////[data-scroll-to] - это мы выбрали все элементы с дата объектами
  // которые у нас называются дата-скролл-ту
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to'); // переменная таргет, 
  //присваиваем ей значение таргета (совершенного над этим элементом).атрибут(какой именно атрибут)
  performTransition(target);

})

///////Свайпанье на мобильных устройсвах которое мы после подключения mobile-detect-modernizr оборачиваем
//в функцию if, для того чтоб не грузить десктоп не нужным. 

// if (isMobile) {

// }



$(document).swipe({ // данная функция из библиотеки touchswipe которую подключил в самом начале HTML файла
  //Generic swipe handler for all directions
  swipe: function (
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
  ) {
    // alert(direction); ///это чтоб посмотреть что там и куда идет
    const scrollDirectional = direction === 'down' ? 'up' : 'down'; // что означает, переделка
    //для мобильных, если = напрааление === вниз ? => вверх: если другое - вниз
    //библиотека возвращает факт, а нам нужно толкать страницу в противоположную сторону
    scrollToSection(scrollDirectional);
  }
});


///// Конец ван пейдж скроллинга























///////навешивание активного класса на меню

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  let header = document.querySelector('#header');

  header.classList.toggle('header__menu_active');
  console.log(header);
})

////// Работа с командой и вытаскивание из нее



var teamAccordeon = document.querySelector('#teamList');
// var Accordeon = document.querySelector('.team__item');

createAcc(teamAccordeon);

function createAcc(event) {
  let activeClass;

  event.addEventListener('click', function (event) {
    if (event.target.classList.contains('team__member')) {
      const item = event.target;

      if (activeClass) {
        activeClass.classList.remove('team__item-active');
        console.log(activeClass);
      }

      activeClass = item.parentNode;
      activeClass.classList.add('team__item-active');
    }


  });

}

////// Работа меню (горизонтальный аккордеон)

///////// Начало функции что анимирует меню jQuery

$(document).ready(() => {
  const menuList = $('.menu__list');



  $('.menu__trigger').on('click', function (e) {
    e.preventDefault;
    let elem = e.target;
    console.log(elem);

    // $(menuList).find('.menu__item').removeClass('menu__item-active');
    $('.menu__item').siblings().removeClass('menu__item-active');
    $(elem).parents('.menu__item').toggleClass('menu__item-active')


    // console.log($('.menuList').find());








  })



});












////// Работа меню (горизонтальный аккордеон)


////// Работа с формой


//form and btn
const myForm = document.querySelector('#myForm');
const formBtn = document.querySelector('#formBtn');
//fields

///////функуия которая проверяет форму валидации и 
// выдает ошибку согласно форме браузера

formBtn.addEventListener('click', event => {

  event.preventDefault();

  var validData = {
    name: myForm.elements.name.value,
    phone: myForm.elements.phone.value
  };

  if (!validData.name) {
    myForm.elements.name.placeholder = myForm.elements.name.validationMessage;
  }
  if (!validData.phone) {
    myForm.elements.phone.placeholder = myForm.elements.phone.validationMessage;
  }

  var formData = new FormData();
  console.log(formData);


  formData.append('name', myForm.elements.name.value);
  formData.append('phone', myForm.elements.name.value);
  formData.append('comment', myForm.elements.name.value);
  formData.append('to', 'ontonym@gmail.com');


  // phone: myForm.elements.phone.value,
  // street: myForm.elements.street.value,
  // home: myForm.elements.house.value,
  // flat: myForm.elements.apartment.value,
  // floor: myForm.elements.floor.value,
  // comment: myForm.elements.comment.value,
  // cash: myForm.elements.show.value,
  // call: myForm.elements.dontCall.value
  // to: 'ontonym@gmail.com'
  // };

  if (fieldTest(validData)) {

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    console.log('send', formData);

    const message = document.querySelector('#message');



    let msg = document.querySelector('.msg');


    xhr.addEventListener('load', () => {
      if (xhr.status < 400) {
        console.log('success ' + xhr.status);
        ////ниже взятие текста из ответа от сервера
        var textFromServer = JSON.parse(xhr.responseText).message;
        console.log(textFromServer);
        ////// добавление текста с сервера в сообщение
        msg.textContent = textFromServer;
        message.classList.add('message-active');



      } else {
        console.log('error ' + xhr.status);
        msg.textContent = 'Something had been broken!';
        message.classList.add('message-active');


      }
    })

    // if ()

  } else {
    console.log('fail');
  }
})


function fieldTest(o) {
  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      const element = o[key];

      if (!element.length) {
        return false;
      }
    }
  }
  return true;
}

//////////////////////////////////// конец функции отправляющей на сервер и проверяющей форму
///////////// закрытие попапа секции заказов 

(function () {

  let formClose = document.querySelector('#formburger');
  console.log(formClose);

  formClose.addEventListener('click', function (e) {
    e.preventDefault();
    message.classList.remove('message-active');
  });
}());
///////////// закрытие попапа секции заказов //////////



//////////////////////////////////// SLIDER

(function () {

  var slider = document.querySelector('#slider');

  var wrapWidth = slider.querySelector('.slider__wrap').clientWidth;

  var list = slider.querySelector('ul');

  var listItemsCount = list.children.length;

  var posX = 0;

  // console.log(slider, list);
  console.log(wrapWidth);

  var totalWidth = wrapWidth * listItemsCount;

  list.style.width = `${totalWidth}px`;

  console.log(totalWidth);


  slider.addEventListener('click', (e) => {
    var target = e.target.closest('a');

    if (target) {
      console.log(target);
      e.preventDefault();
      var active = slider.querySelector('.active');

      if (target.dataset.vector === 'next' && active.nextElementSibling) {
        posX -= wrapWidth;
        list.style.transform = `translateX(${posX}px)`;

        active.classList.remove('active');
        active.nextElementSibling.classList.add('active');

        console.log(posX);

      }
      if (target.dataset.vector === 'prew' && active.previousElementSibling) {
        posX += wrapWidth;
        list.style.transform = `translateX(${posX}px)`;

        active.classList.remove('active');
        active.previousElementSibling.classList.add('active');



      }
    }


  })

})()

//////////////////////////////////// SLIDER //////////////


//////////////////////// секция отзывов

let elem = $('.review__item')

let link = $('.review__btn');
let reviewClose = $('#reviewburger');
let popup = $('.review__mobile-clicked');

console.log(link);
console.log(reviewClose);

$(link).on('click', function (e) {
  e.preventDefault();

  $(popup).addClass('review__mobile-clicked-active');

  //text content deembedding
  let textH = $(this).closest('li').find('.review__title').text();
  let textP = $(this).closest('div').find('.review__text').text();

  //text content test
  // console.log(textH);
  // console.log(textP);


  //embederint text to new element
  $(popup).find('.review__title-clicked').text(textH);
  $(popup).find('.review__text-clicked').text(textP);

  console.log('cliiiiiick');


});

//closing of popup element
$(reviewClose).on('click', function (e) {
  e.preventDefault();
  $(popup).removeClass('review__mobile-clicked-active');

});

//////////////////////// секция отзывов ///////////




/////////////////MAAAAAAPPPAPAA

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map'), {
    center: {
      lat: 55.7558,
      lng: 37.6173
    },
    zoom: 10
  });
  var markers = [{
      lat: 55.751444,
      lng: 37.785897
    },
    {
      lat: 55.748864,
      lng: 37.705754

    },
    {
      lat: 55.757326,
      lng: 37.658692
    }
  ]
  for (let index = 0; index < markers.length; index++) {
    maarker = new google.maps.Marker({
      position: markers[index],
      icon: '../../IMG-from-maket/map-marker.svg',
      map: map
    })
  }
}




// AIzaSyAU9jyswJMUdpKoCm29hL5iNOHi23vCQjE

// Эталон записи функции, который все равно
// // var fn = (value) => {
// //   value = value * 2;
// //   return value;
// // }

// console.log(fn(20));

// А эта конструкция позволит прбежать по всем свойсвам обьекта:

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// for (var prop in obj) {
//   console.log("obj." + prop + " = " + obj[prop]);
// }

// чтоб получить такую вот запись и работать потом с ней (еребирание объекта
//   и конкретно в данном премере проверка на пустоту значения) нужно // forin

//   for (const key in o) {
//     if (o.hasOwnProperty(key)) {
//       const element = o[key];

//       if (!element.length) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// о - обьект