const router = require('express').Router()
const ctrls = require('../controllers/productCategory')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

router.get('/', ctrls.getCategories)
router.post('/',[verifyAccessToken, isAdmin], ctrls.createCategory)
router.put('/:pcid',[verifyAccessToken, isAdmin], ctrls.updateCategory)
router.delete('/:pcid',[verifyAccessToken, isAdmin], ctrls.deleteCategory)


module.exports = router