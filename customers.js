var customers = [
  {
    id: 1,
    name: "Steve Rogers",
  },
  {
    id: 2,
    name: "Tony Stark",
  },
];

exports.findAll = function () {
  return customers;
};

exports.findById = function (id) {
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].id == id) return customers[i];
  }
};
