import { Document, Schema,  model,  models } from "mongoose";

 export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?:{
        id:string
        firstName:string
        lastName:string
    }
     // Assuming Schema.ObjectId is a valid type or interface
    createdAt: Date;
    updatedAt: Date;
  }
  

const ImageSchema = new Schema({
    title:{type:String, required:true,},
    transformationType:{type:String,required:true},
    publicId:{type:String,required:true},
    secureUrl:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.ObjectId, ref:'User'},
    createdAt:{type:Date, default:Date.now},
    updateAt:{type:Date, default:Date.now},

}) 

const Image = models?.Image || model('Image',
    ImageSchema
);

export default Image