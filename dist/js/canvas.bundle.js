/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/SpriteIdleLeft.png":
/*!************************************!*\
  !*** ./src/img/SpriteIdleLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e079e09fc3d065a05f62ac315efd2c6.png");

/***/ }),

/***/ "./src/img/SpriteIdleRight.png":
/*!*************************************!*\
  !*** ./src/img/SpriteIdleRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b21911e4cc3630c5b2116d3b8499de81.png");

/***/ }),

/***/ "./src/img/SpriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/SpriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d4046f34601d41dc2133db69037d8c59.png");

/***/ }),

/***/ "./src/img/SpriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/SpriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbb021a85077978b396cbac82083fa63.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform2.png":
/*!*******************************!*\
  !*** ./src/img/platform2.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e12ea9de5f0a7c84239d2b8827bbaa3f.png");

/***/ }),

/***/ "./src/img/platformSmallTall2.png":
/*!****************************************!*\
  !*** ./src/img/platformSmallTall2.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "634ebcad1f9dd1089711214bc0a836fa.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform2.png */ "./src/img/platform2.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall2.png */ "./src/img/platformSmallTall2.png");
/* harmony import */ var _img_SpriteIdleLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/SpriteIdleLeft.png */ "./src/img/SpriteIdleLeft.png");
/* harmony import */ var _img_SpriteIdleRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/SpriteIdleRight.png */ "./src/img/SpriteIdleRight.png");
/* harmony import */ var _img_SpriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/SpriteRunLeft.png */ "./src/img/SpriteRunLeft.png");
/* harmony import */ var _img_SpriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/SpriteRunRight.png */ "./src/img/SpriteRunRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }









var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var gravity = 1.2;
canvas.width = 1280;
canvas.height = 720; //Personagem Principal

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    }; //velocidade do jogador

    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 149;
    this.height = 181;
    this.image = createImage(_img_SpriteIdleRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.frames = 0;
    this.sprites = {
      idle: {
        right: createImage(_img_SpriteIdleRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_img_SpriteIdleLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 137.7
      },
      run: {
        right: createImage(_img_SpriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_SpriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 153.8
      }
    };
    this.currentSprite = this.sprites.idle.right;
    this.currentCropWidth = 137.7;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 181, this.position.x, this.position.y, this.width, this.height);
    } //função que irá atualizar(em relação a movimento/posição/velocidade) o jogador

  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 9 && this.currentSprite === this.sprites.idle.left) this.frames = 0;else if (this.frames > 8 && this.currentSprite === this.sprites.idle.right) this.frames = 0;else if (this.frames > 7 && this.currentSprite === this.sprites.run.right) this.frames = 0;else if (this.frames > 7 && this.currentSprite === this.sprites.run.left) this.frames = 0;
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.draw();
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform2_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObject = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = createImage(_img_platform2_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  player.position.x = 30;
  platforms = [new Platform({
    x: -1,
    y: 624,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 1.3,
    y: 624,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2.9,
    y: 624,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4.2,
    y: 504,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 5.2,
    y: 504,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 6.2,
    y: 424,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 7.2,
    y: 624,
    image: platformSmallTallImage
  })];
  genericObject = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 150,
    y: 150,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

player.update();

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'gray';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  } //Sistema de colisão com a plataforma


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //Win Condition

  if (scrollOffset === 3900) {
    console.log("você Ganhou!");
    alert('Parabéns, você terminou essa DEMO, o jogo irá reiniciar do 0');
    location.reload();
  } //Lose Condition


  if (player.position.y > canvas.height) init();
}

init();
animate(); //movimentar o personagem para baixo

window.addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      break;

    case 87:
      console.log("up");
      player.velocity.y -= 22;
      break;
  }
});
window.addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      player.currentSprite = player.sprites.idle.left;
      player.currentCropWidth = player.sprites.idle.cropWidth;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      player.currentSprite = player.sprites.idle.right;
      player.currentCropWidth = player.sprites.idle.cropWidth;
      break;

    case 87:
      console.log("up");
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map