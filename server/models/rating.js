const mongoose = require("mongoose");

const RatingScehma = new mongoose.Schema(
  {
    userId: Number,
    // lname: String,
    diveRegion: String,
    diveAreaId: String,
    Mean_rating: Number,
    damped_mean: Number,
  },
  {
    collection: "RatingTest10",
  }
);

// module.exports = mongoose.model("Item", itemSchema);

// const Recommendation = mongoose.model("RecommendationTesting2", RecommendationSchema);

const Rating = mongoose.model("RatingTest10", RatingScehma);

module.exports = Rating; // Export the model
