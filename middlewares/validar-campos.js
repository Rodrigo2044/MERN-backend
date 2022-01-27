// Nuevamente me gustaria tener el tipado con la respueta
const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {
  // Manejo de errores
  // con express-validator tenemos una validacion para todos los campos
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

module.exports = {
  validarCampos,
};
