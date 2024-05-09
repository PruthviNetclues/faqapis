const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');
const { validateFaq } = require('../middlewares/validationMiddleware');

router.get('/', faqController.getAllFaqs);
router.post('/', validateFaq, faqController.createFaq);

module.exports = router;