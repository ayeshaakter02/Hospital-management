import app from "./app.js";
import cloudinary from "cloudinary"

cloudinary.v2.config({
    cloud_name:  daqdqatmv,
    api_key: 343563893266842,
    api_secret: H7YM0ldc6d1BSG6ztEd9HdHiewU,

})

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});