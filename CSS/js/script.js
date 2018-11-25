

///////навешивание активного класса на меню

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(e){
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



teamList.onclick = function(e) {
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

