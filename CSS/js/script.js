///////навешивание активного класса на меню

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  let header = document.querySelector('#header');

  header.classList.toggle('header__menu_active');
  console.log(header);
})

////// Работа с командой и вытаскивание из нее




const teamAct1 = document.querySelector('#teamAct1');
const teamAct2 = document.querySelector('#teamAct2');
const teamAct3 = document.querySelector('#three');
const teamAct4 = document.querySelector('#four');



teamList.onclick = function (e) {
  e.preventDefault();
  console.log(event.target.id);

  var target = event.target.id;

  if (target == 'teamLink1') {
    teamAct1.classList.toggle('team__item-active');
    teamAct2.classList.remove('team__item-active');
    teamAct4.classList.remove('team__item-active');
    teamAct4.classList.remove('team__item-active');
  }
  if (target == 'teamLink2') {
    teamAct2.classList.toggle('team__item-active');
    teamAct1.classList.remove('team__item-active');
    teamAct3.classList.remove('team__item-active');
    teamAct4.classList.remove('team__item-active');
  }
  if (target == 'teamLink3') {
    teamAct3.classList.toggle('team__item-active');
    teamAct2.classList.remove('team__item-active');
    teamAct4.classList.remove('team__item-active');
    teamAct1.classList.remove('team__item-active');
  }
  if (target == 'teamLink4') {
    teamAct4.classList.toggle('team__item-active');
    teamAct1.classList.remove('team__item-active');
    teamAct2.classList.remove('team__item-active');
    teamAct3.classList.remove('team__item-active');
  }
};

////// Работа меню (горизонтальный аккордеон)










////// Работа меню (горизонтальный аккордеон)


////// Работа с формой


//form and btn
const myForm = document.querySelector('#myForm');
const formBtn = document.querySelector('#formBtn');
//fields

//Отдельная функция, так как не понял как ее добавить для подставления надписи в плейсхолдер

// const name = document.querySelector('.form__block-title');
// const nameField = document.querySelector('.form__input');

// if (!myForm.elements.name.value) {
//   name.style.color = 'red';
//   nameField.style.backgroundColor = 'red';
//   nameField.placeholder = nameField.validationMessage;

// };





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

    xhr.addEventListener('load', () => {
      if (xhr.status < 400) {
        console.log('success ' + xhr.status);
      } else {
        console.log('error ' + xhr.status);
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