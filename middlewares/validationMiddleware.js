const Joi = require('joi');

// Joi schema for validation
const faqSchema = Joi.object({
    question: Joi.string().min(3).max(255).required(),
    answer: Joi.string().min(3).required()
});

// Middleware function to validate FAQ input
exports.validateFaq = (req, res, next) => {
    const { error } = faqSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};