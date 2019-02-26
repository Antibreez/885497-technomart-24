/** 
Вызовы попапов
**/

var writeUs = document.querySelector(".contacts .button");
var map = document.querySelector(".map");
var buy = document.querySelectorAll(".button-buy");

/**
Попап "Напишите нам"
**/

var popupMessage = document.querySelector(".popup-message");

if (popupMessage) {
  var form = popupMessage.querySelector("form");
  var userName = popupMessage.querySelector("[name=user-name]");
  var email = popupMessage.querySelector("[name=email]");
  var letter = popupMessage.querySelector("[name=letter]");
  var popupMessageClose = popupMessage.querySelector(".popup-close");

  var isStorageSupport = true;
  var storageName = "";
  var storageEmail = "";

  try {
    storageName = localStorage.getItem("user-name");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMessage.classList.add("popup-show");

    if (storageName) {
      userName.value = storageName;
      if (storageEmail) {
        email.value = storageEmail;
        letter.focus();
      } else {
        email.focus();
      }
    } else {
      userName.focus();
      if (storageEmail) {
        email.value = storageEmail;
      }
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value || !letter.value) {
      evt.preventDefault();
      popupMessage.classList.remove("popup-error");
      popupMessage.offsetWidth = popupMessage.offsetWidth;
      popupMessage.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", userName.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  popupMessageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMessage.classList.remove("popup-show");
    popupMessage.classList.remove("popup-error");
  });

};

/**
Попап "Купить"
**/

var popupCart = document.querySelector(".popup-cart");
var shopping = popupCart.querySelector(".button-shopping");
var popupCartClose = popupCart.querySelector(".popup-close");

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("popup-show");
  });
};

shopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup-show");
});

popupCartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup-show");
});

/**
Попап Карты
**/

var popupMap = document.querySelector(".popup-map");

if (popupMap) {
  var popupMapClose = popupMap.querySelector(".popup-close");

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
  });

  popupMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
  });
};

/**
Слайдер
**/

var slider = document.querySelector(".slider");

if (slider) {
  var leftArrow = slider.querySelector(".slider-left-arrow");
  var rightArrow = slider.querySelector(".slider-right-arrow");
  var leftButton = slider.querySelector(".slider-left-btn");
  var rightButton = slider.querySelector(".slider-right-btn");
  var slideDrills = slider.querySelector(".slide-drills");
  var slidePerforators = slider.querySelector(".slide-perforators");

  var slideSwitch = function (clickTarget, slideShow, slideHide, buttonShow, buttonHide) {
    clickTarget.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (!slideShow.classList.contains("slide-show")) {
        slideHide.classList.remove("slide-show");
        buttonHide.classList.remove("slider-btn-active");
        slideShow.classList.add("slide-show");
        buttonShow.classList.add("slider-btn-active");
      };
    });
  };

  slideSwitch(leftArrow, slidePerforators, slideDrills, leftButton, rightButton);

  slideSwitch(rightArrow, slideDrills, slidePerforators, rightButton, leftButton);

  slideSwitch(leftButton, slidePerforators, slideDrills, leftButton, rightButton);

  slideSwitch(rightButton, slideDrills, slidePerforators, rightButton, leftButton);
};

/**
Переключатель Сервисы
**/

var servicesBlock = document.querySelector(".services-block");

if (servicesBlock) {
  var servicesItems = servicesBlock.querySelectorAll(".services-item");
  var servicesDescriptions = servicesBlock.querySelectorAll(".service-description");

  for (var i = 0; i < servicesItems.length; i++) {

    servicesItems[i].addEventListener("click", function (evt) {
      evt.preventDefault();

      for (var j = 0; j < servicesItems.length; j++) {
        if (servicesItems[j] == evt.target) {
          
            if (!evt.target.classList.contains("services-item-active")) {
              for (var k = 0; k < servicesItems.length; k++) {
                if (servicesItems[k].classList.contains("services-item-active")) {
                  servicesItems[k].classList.remove("services-item-active");
                  servicesDescriptions[k].classList.remove("service-description-show");
                };
              };

              evt.target.classList.add("services-item-active");
              servicesDescriptions[j].classList.add("service-description-show");
            };
          
        };
      };
    });
  };
};


