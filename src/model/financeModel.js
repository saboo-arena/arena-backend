const mongoose = require("mongoose")

const financeSchema = new mongoose.Schema({
    name: String, // User's name
    phone: String, // User's phone number
    email: String, // User's email address
    outlet: String, // Selected outlet
    comments: String, // User's comments
    model: String, // Selected car model
    purchase_time: String, // Selected purchase time
    loan_amount: String, // Loan amount
    loan_duration: String, // Loan duration in years
    leadFrom : {
      type: String,
      default:"finance"
     },
    date: {
        type: String,
      },
      time: {
        type: String,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
      deletedAt: {
        type: Date,
      },
},{timestamps:true})
module.exports = mongoose.model("finance", financeSchema);