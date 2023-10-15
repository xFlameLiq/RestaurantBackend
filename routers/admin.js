const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');
const AdminSchema = require('../validations/admin');
const validator = require('../middlewares/validator');

router.get('/admins',admin.getAdmin);
router.get('/admins/:id', validator.params(AdminSchema.paramsSchema) ,admin.getAdminById);
router.post('/admins', validator.body(AdminSchema.createAdminSchema), admin.insertAdmin);
router.put('/admins/:id', validator.params(AdminSchema.paramsSchema), validator.body(AdminSchema.updateAdminSchema), admin.updateAdmin);
router.delete('/admins/:id', validator.params(AdminSchema.paramsSchema), admin.deleteAdmin);

module.exports =  router;
