"use strict";

var Order = require('../../../models/order');

var moment = require('moment');

function orderController() {
  return {
    store: function store(req, res) {
      //Validate request
      var _req$body = req.body,
          phone = _req$body.phone,
          address = _req$body.address;

      if (!phone || !address) {
        req.flash('error', 'Please fill all the fields.');
        return res.redirect('/cart');
      }

      var order = new Order({
        customerId: req.user._id,
        items: req.session.cart.items,
        phone: phone,
        address: address
      });
      order.save().then(function (result) {
        req.flash('success', 'Order placed Successfully');
        delete req.session.cart;
        return res.redirect('/customer/orders');
      })["catch"](function (err) {
        req.flash('error', 'Something went wrong');
        return res.redirect('/cart');
      });
    },
    index: function index(req, res) {
      var orders;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Order.find({
                customerId: req.user._id
              }, null, {
                sort: {
                  'createdAt': -1
                }
              }));

            case 2:
              orders = _context.sent;
              res.header('Cache-Control', 'no-store');
              res.render('customers/orders', {
                orders: orders,
                moment: moment
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  };
}

module.exports = orderController;
//# sourceMappingURL=orderController.dev.js.map
