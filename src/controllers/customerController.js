const controller = {}

controller.test = (req,res) => {

  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  console.log("Enviar datos del empleado al controlador");
  res.json(data);

};

module.exports = controller;