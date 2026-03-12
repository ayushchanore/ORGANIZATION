const DonorModel = require("../Models/Donor");

const registerDonor = async (req, res) => {
    try {
        const donorData = { ...req.body, userId: req.user._id };
        const donor = new DonorModel(donorData);
        await donor.save();
        res.status(201).json({ message: "Donor registered successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: "Failed to register donor", success: false });
    }
};

const getDonorStats = async (req, res) => {
    try {
        const totalDonors = await DonorModel.countDocuments();
        const maleDonors = await DonorModel.countDocuments({ gender: "Male" });
        const femaleDonors = await DonorModel.countDocuments({ gender: "Female" });
        
        const organStats = await DonorModel.aggregate([
            { $unwind: "$organs" },
            { $group: { _id: "$organs", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        const bloodGroupStats = await DonorModel.aggregate([
            { $match: { bloodGroup: { $ne: null, $ne: "" } } },
            { $group: { _id: "$bloodGroup", count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalDonors,
                maleDonors,
                femaleDonors,
                organStats,
                bloodGroupStats
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch stats", success: false });
    }
};

module.exports = { registerDonor, getDonorStats };
