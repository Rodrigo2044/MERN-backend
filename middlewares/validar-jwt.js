const { response } = require('express');
const jwt = require('jsonwebtoken');
// Hay que importar express para tener la ayuda

const validarJWT = (req, res = response, next) => {
  // ??? Como voy a recibir el jwt, va a ser en x-token en los headers
  const token = req.header('x-token');
  // console.log(token);
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la peticion',
    });
  }

  try {
    // Intentaremos extraer el payload
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    // console.log(payload);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'token no valido',
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
