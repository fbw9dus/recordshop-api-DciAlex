exports.getOrders = (req, res, next) => {

  res.status(200).send(orders);
};

exports.getOrder = (req, res, next) => {
  const { id } = req.params;

  res.status(200).send(order);
};

exports.deleteOrder = (req, res, next) => {
  const { id } = req.params;

  res.status(200).send(order);
};

exports.updateOrder = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;

  res.status(200).send(order);
};

exports.addOrder = (req, res, next) => {
  const order = req.body;

  res.status(200).send(order);
};
