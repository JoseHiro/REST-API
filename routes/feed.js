const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();


// get
router.get('/posts', feedController.getPosts);

// Post
router.post('/post', feedController.createPost);

module.exports = router;
