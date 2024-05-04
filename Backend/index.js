import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import plantRoute from "./route/plant.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
const app = express()
app.use(cors())
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI =process.env.MongoDBURI;


try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");

} catch(error){
    console.log("Error:",error);

}

//defining route
app.use("/plant", plantRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});