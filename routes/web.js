const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const homeController = require('../app/http/controllers/homeController')
const  guest = require('../app/http/middlewares/guest')
function initRoutes(app){

    let auth = authController()
    let home = homeController()

    app.get('/', home.index)
    
    app.get('/login', guest, auth.login)
    app.post('/login', auth.postLogin)
    
    app.get('/register', guest, auth.register);


    app.post('/register', auth.postRegister)

    app.post('/logout', auth.logout)



    app.get ('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
}


module.exports =  initRoutes