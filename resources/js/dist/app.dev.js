"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _noty = _interopRequireDefault(require("noty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addToCart = document.querySelectorAll('.add-to-cart');
var cartCounter = document.querySelector('#cartCounter');

function updateCart(pizza) {
  _axios["default"].post('/update-cart', pizza).then(function (res) {
    cartCounter.innerText = res.data.totalQty;
    new _noty["default"]({
      type: 'success',
      timeout: 1000,
      text: 'Item added to cart',
      progressBar: false,
      layout: 'topLeft'
    }).show();
  })["catch"](function (err) {
    new _noty["default"]({
      type: 'error',
      timeout: 1000,
      text: 'Something went wrong',
      progressBar: false
    }).show();
  });
}

addToCart.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza);
  });
});
//# sourceMappingURL=app.dev.js.map
