"use strict";

var authController = require('../app/http/controllers/authController');

var cartController = require('../app/http/controllers/customers/cartController');

var homeController = require('../app/http/controllers/homeController');

var guest = require('../app/http/middlewares/guest');

function initRoutes(app) {
  var auth = authController();
  var home = homeController();
  app.get('/', home.index);
  app.get('/login', guest, auth.login);
  app.post('/login', auth.postLogin);
  app.get('/register', guest, auth.register);
  app.post('/register', auth.postRegister);
  app.post('/logout', auth.logout);
  app.get('/cart', cartController().index);
  app.post('/update-cart', cartController().update);
}

module.exports = initRoutes;
//# sourceMappingURL=web.dev.js.map
