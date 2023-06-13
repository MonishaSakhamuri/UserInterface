// 1. import any needed libraries
const express = require('express');
const post = require('../models/post');//accesses functions in post model file
const router = express.Router();

// 2. create all routes to access database
router
.post('/getpost', async (req, res) => {
    try {
      let noteget = await post.getpost(req.body.id);
      res.send(noteget)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createpost', async (req, res) => {
    try {
      let postcreates = await post.createpost(req.body.id, req.body.postcontent);
      res.send(postcreates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  .post('/updatepost', async (req, res) => {
    try {
      let postupdates = await post.updatepost(req.body.id, req.body.postcontent);
      res.send(postupdates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/deletepost', async (req, res) => {
    try {
      let postdeletes= await post.deletepost(req.body.id);
      res.send(postdeletes)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

// 3. export router for use in index.js
module.exports=router;