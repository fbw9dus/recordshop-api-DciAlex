const mongoose = require("mongoose");
const { Schema } = mongoose;


const adress = new Schema({
  street:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  }
})

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    address: adress,

    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
    },
  
  { 
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);


UserSchema.virtual("fullName").get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);