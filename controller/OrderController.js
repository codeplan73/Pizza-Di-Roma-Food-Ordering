const Order = require('../model/Order')
const Meal = require('../model/Meal')
const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')

const fakeStripeApi = async ({ amount, currency }) => {
  const client_secret = 'someRandomValue'
  return { client_secret, amount }
}
 
const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided')
  }

  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError('Please provide tax and shipping fee')
  }

  let orderItems = []
  let subtotal = 0

  for (const item of cartItems) {
    const dbMeal = await Meal.findOne({ _id: item.meal })
    if (!dbMeal) {
      throw new CustomError.NotFoundError(`No product with id ${item.meal}`)
    }
    const { name, price, image, _id } = dbMeal
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      product: _id,
    }
    // add item to order
    orderItems = [...orderItems, singleOrderItem]
    // calculate subtotal
    subtotal += item.amount * price
  }

  console.log(orderItems)
  console.log(subtotal)

  const total = tax + shippingFee + subtotal

  // get client secret

  const paymentIntent = await fakeStripeApi({
    amount: total,
    currency: 'usd',
  })

  const order = await Order.create({
    orderItems,
    total,
    subtotal,
    tax,
    shippingFee,
    client_secret: paymentIntent.client_secret,
    user: req.user.userId,
  })

  res.status(StatusCodes.CREATED).json({order, client_secret:order.client_secret})
}
const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({orders, count:orders.length});
}
const getSingleOrder = async (req, res) => {
    const {id:orderItem} = req.params;
  const order = await Order.find({_id: req.params.id});

  if(!order){
    throw new CustomError.NotFoundError(`No order with id: ${orderItem}`);
  }

  checkPermissions(req.user, order.user);

  res.status(StatusCodes.OK).json({order})
}

const getCurrentUserOrders = async (req, res) => {
  const order = await Order.find({user:req.user.userId})
  res.status(StatusCodes.OK).json({order, count:order.length});
}
const updateOrder = async (req, res) => {
  const {id: orderId} = req.params;
  const {paymentIntentId} = req.body;

  const order = await Order.findOne({ _id: orderId})

  if(!order){
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }

  checkPermissions(req.user, order.user);

  order.paymentIntentId = paymentIntentId
  order.status = 'paid';
  await order.save();

  res.status(StatusCodes.OK).json({order});
}

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
}
