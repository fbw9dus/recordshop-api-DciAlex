const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdressSchema = new Schema(
  {
    street: {
      type: String,
      required: true
    },
    city:{
      type:String,
      required:true
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
)

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
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    buy: [{
      ref: "Order",
      type: mongoose.Schema.Types.ObjectId
    }],
    address:AdressSchema
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
