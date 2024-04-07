const BlogCategory = require('../models/blogCategory')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const createCategory = asyncHandler(async (req,res) => {
    const response = await BlogCategory.create(req.body)
    return res.json({
        success: response ? true : false,
        createdCategory: response ? response : 'Cannot create category'
    })
})
const getCategories = asyncHandler(async (req,res) => {
    const response = await BlogCategory.find().select('title _id')
    return res.json({
        success: response ? true : false,
        prodCategories: response ? response : 'Cannot get category'
    })
})
const updateCategory = asyncHandler(async (req,res) => {
    const {bcid} = req.params
    const response = await BlogCategory.findByIdAndUpdate(bcid,req.body,{new: true})
    return res.json({
        success: response ? true : false,
        updatedCategory: response ? response : 'Cannot update category'
    })
})
const deleteCategory = asyncHandler(async (req,res) => {
    const {bcid} = req.params
    const response = await BlogCategory.findByIdAndDelete(bcid)
    return res.json({
        success: response ? true : false,
        deleteCategories: response ? response : 'Cannot delete category'
    })
})
module.exports = {
    createCategory,
    getCategories,
    deleteCategory,
    updateCategory
}