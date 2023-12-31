const express = require('express')
const router = express.Router()
const authController =require('./controllers/authController.js')
const userController =require('./controllers/userController.js')
const postController =require('./controllers/postController.js')

// auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// user routes
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/user/:id', userController.getUser);
router.post('/user/:id/follow', userController.follow);
router.post('/user/:id/unfollow', userController.unfollow);

//post routes
router.post('/post',postController.createPost);
router.put('/post/:id',postController.updatePost);
router.delete('/post/:id',postController.deletePost);
router.post('/post/:id/like',postController.likePost);
router.get('/post/:id/timeline',postController.getPostTimeline);
router.get('/post/:id/',postController.getPost);


module.exports = router