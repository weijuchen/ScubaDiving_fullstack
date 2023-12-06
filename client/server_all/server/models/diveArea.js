const mongoose = require("mongoose");

const DiveAreaScehma = new mongoose.Schema(
  {
    userId: Number,
    // lname: String,
    diveRegion:String,
    diveAreaId: Number,
    rating: Number,
  },
  {
    collection: "DiveAreaRatings",
  }
);

mongoose.model("DiveAreaRatings", DiveAreaScehma);
