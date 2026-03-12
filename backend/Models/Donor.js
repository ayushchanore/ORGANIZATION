const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    fullName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    bloodGroup: String,
    phone: { type: String, required: true },
    email: String,
    address: { type: String, required: true },
    height: Number,
    weight: Number,
    medicalConditions: String,
    infectiousDiseases: String,
    medications: String,
    habits: String,
    organs: [String],
    donationType: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('donors', DonorSchema);
