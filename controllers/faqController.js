const { Faq } = require('../models/faqModel');

exports.getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.findAll();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFaq = async (req, res) => {
    const { question, answer } = req.body;

    try {
        const faq = await Faq.create({ question, answer });
        res.status(201).json(faq);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};