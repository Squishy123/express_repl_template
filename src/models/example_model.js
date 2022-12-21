const Model = require("./model.js")

class ExampleModel extends Model {
  constructor(color) {
    super("example_model")
    this.color = color
  }
}

