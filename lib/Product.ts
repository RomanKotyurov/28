import mongoose from "mongoose";

export interface Products extends mongoose.Document {
  name: String;
  image: String;
  ingredients: [String];
  description: String
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema<Products>({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  image: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  ingredients: {
    /* List of things your pet likes to do */

    type: [String],
  },
  description: {
    /* List of things your pet does not like to do */

    type: String,
    required: [true, "Please provide the pet owner's name"],
  },
});

export default mongoose.models.Product || mongoose.model<Products>("Product", ProductSchema);
