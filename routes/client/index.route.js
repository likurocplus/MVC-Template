module.exports = (app) => {
    const productRouter = require('./product.route')
    const homeRouter = require('./home.route')
    const controller = require('../../controllers/client/home')
    app.use('/', homeRouter )
    app.use('/product', productRouter)
}

