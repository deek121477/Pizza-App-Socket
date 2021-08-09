"use strict";

function authController() {
  return {
    login: function login(req, res) {
      res.render('auth/login');
    },
    register: function register(req, res) {
      res.render('auth/register');
    }
  };
}

module.exports = authController;
//# sourceMappingURL=authController.dev.js.map
