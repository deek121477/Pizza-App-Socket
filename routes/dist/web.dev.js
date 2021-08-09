"use strict";

var authController = require('../app/http/controllers/authController');

var cartController = require('../app/http/controllers/customers/cartController');

var homeController = require('../app/http/controllers/homeController');

function initRoutes(app) {
  app.get('/', homeController().index);
  app.get('/login', authController().login);
  app.get('/register', authController().register);
  app.get('/cart', cartController().index);
  app.post('/update-cart', cartController().update);
}

module.exports = initRoutes;
//# sourceMappingURL=web.dev.js.map
