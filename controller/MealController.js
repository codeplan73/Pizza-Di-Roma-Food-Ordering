const Meal = require('../model/Meal');
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const path = require('path');
const { checkPermissions } = require('../utils')
const cloudinary = require('cloudinary').v2
const fs = require('fs')


const createMeal = async (req, res) => {
    req.body.user = req.user.userId

    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: 'meals',
        }
    )

    fs.unlinkSync(req.files.image.tempFilePath)
    req.body.imageUrl = result.secure_url;

    const meal = await Meal.create(req.body)
    res.status(StatusCodes.CREATED).json({ meal })
}


const getAllMeals = async (req, res) => {
    const meals = await Meal.find({});
    res.status(StatusCodes.OK).json(meals)
}


const getMeal = async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    if(!meal){
        throw new CustomError.NotFoundError('No meal such id')
    }
    res.status(StatusCodes.OK).json( meal )
}


const updateMeal = async (req, res) => {
    const id = req.params.id;

    const meal = await Meal.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!meal) {
        throw new CustomError.NotFoundError(`No meal with id ${id}`)
    }

    res.status(StatusCodes.OK).json({ meal })
}


const deleteMeal = async (req, res) => {
    const id = req.params.id
    const meal = await Meal.findOne({ _id: id })

    if (!meal) {
        throw new CustomError.NotFoundError(`No meal with id: ${id}`)
    }

    await meal.remove()
    res.status(StatusCodes.OK).json({ msf: 'Success! meal has benn removed' })
}

module.exports = {
    createMeal, getAllMeals, getMeal, updateMeal, deleteMeal
}