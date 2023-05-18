const awesomeFunction = (req, res, next) => {
  res.json("Awesome Person!");
};

const nameAwesomeFunction = (req, res, next) => {
  res.json("Esther is a Awesome Person!");
};

module.exports = { awesomeFunction, nameAwesomeFunction };
