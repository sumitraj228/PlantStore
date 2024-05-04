import Plant from "../model/plant.model.js";

export const getPlant=async(req,res)=>{
    try{
        const plant=await Plant.find();
        res.status(200).json(plant);

    } catch (error){
        console.log("Error: ",error);
        res.status(500).json(error);

    }
}