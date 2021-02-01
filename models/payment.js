const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: false },
    email: String,
    amount: { type: Number, required: false },
    quantity: String,
    reference: { type: String, required: false },
  },
  { timestamps: true }
);

mongoose.model("payment", paymentSchema);
