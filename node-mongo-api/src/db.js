import mongoose from "mongoose";

(async () => {
   try {
    await mongoose.connect("mongodb://localhost/mongostore")
    console.log("MongoDB is connected.")
   } catch (error) {
    console.log(error)
   }
})
()