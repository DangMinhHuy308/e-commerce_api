const router = require('express').Router()
const ctrls = require('../controllers/blogCategory')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

router.get('/', ctrls.getCategories)
router.post('/',[verifyAccessToken, isAdmin], ctrls.createCategory)
router.put('/:bcid',[verifyAccessToken, isAdmin], ctrls.updateCategory)
router.delete('/:bcid',[verifyAccessToken, isAdmin], ctrls.deleteCategory)


module.exports = router