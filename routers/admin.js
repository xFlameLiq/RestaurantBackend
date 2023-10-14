const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');

router.post('/admin', admin.insertAdmin);
router.get('/admin', admin.getAdmin);
router.put('/admin/:id', admin.updateAdmin);
router.delete('/admin/:id', admin.deleteAdmin);

module.exports =  router;
