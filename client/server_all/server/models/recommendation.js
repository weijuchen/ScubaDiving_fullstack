const mongoose = require("mongoose");

const RecommendationScehma = new mongoose.Schema(
  {
    userId: Number,
    // lname: String,
    diveRegion: String,
    diveArea: String,
    rating: Number,
  },
  {
    collection: "RecommendationTesting2",
  }
);

// module.exports = mongoose.model("Item", itemSchema);

// const Recommendation = mongoose.model("RecommendationTesting2", RecommendationSchema);
const Recommendation = mongoose.model(
  "RecommendationTesting2",
  RecommendationScehma
);

module.exports = Recommendation; // Export the model
