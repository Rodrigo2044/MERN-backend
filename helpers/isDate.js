const moment = require('moment');
// Si quiero validar fechas instalo moment

const isDate = (value) => {
  if (!value) {
    return false;
  }

  const fecha = moment(value);
  // isValid es propiamente de moment
  if (fecha.isValid()) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isDate };
