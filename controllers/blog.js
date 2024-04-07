const Blog = require('../models/blog')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const createBlog = asyncHandler(async (req,res) => {
    const {title, description, category} = req.body
    if(!title || !description || !category) throw new Error('Missing input')
    const response = await Blog.create(req.body)
    return res.json({
        success: response ? true : false,
        createdBlog: response ? response : 'Cannot create Blog'
    })
})
const getBlog = asyncHandler(async (req,res) => {
    const response = await Blog.find().select('title _id')
    return res.json({
        success: response ? true : false,
        prodBlogies: response ? response : 'Cannot get Blog'
    })
})
const updateBlog = asyncHandler(async (req,res) => {
    const {bid} = req.params
    if(Object.keys(req.body).length === 0) throw new Error('Missing input')
    const response = await Blog.findByIdAndUpdate(bid,req.body,{new: true})
    return res.json({
        success: response ? true : false,
        updatedBlog: response ? response : 'Cannot update Blog'
    })
})
const deleteBlog = asyncHandler(async (req,res) => {
    const {bid} = req.params
    const response = await Blog.findByIdAndDelete(bid)
    return res.json({
        success: response ? true : false,
        deleteBlogies: response ? response : 'Cannot delete Blog'
    })
})
module.exports = {
    createBlog,
    getBlog,
    deleteBlog,
    updateBlog
}