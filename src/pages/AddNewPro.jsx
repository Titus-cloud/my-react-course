import { useState } from "react";
import { db } from "../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";

export default function AddNewPro(product) {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "product"), formData);
      console.log("Document successfully written: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // creating and handling img
  function handleImgUpload(e) {
    const file = e.target.files[0];
    const url = 'https://api.cloudinary.com/v1_1/onzere/image/upload'
    const bodyData = new FormData()
    bodyData.append("file", file)
    bodyData.append("upload_preset","product")
    fetch(url, {
      method:"POST",
      body:bodyData
    })

    .then(res => res.json())
    .then(data => setFormData(prev => ({...prev ,img:data.secure_url})))
    .catch(err => console.log(err))
    
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     console.log("Base64 Image String: ", reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   console.error("No file selected");
    // }
  }

  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-2xl font-bold p-5">Add New Product</h1>
      <form className="flex flex-col border-solid border-2 px-12 py-7 gap-10 mb-10">
        <input
          onChange={(e) => handleChange(e)}
          className="p-3 shadow-md shadow-[black] outline-none"
          type="text"
          name="product"
          placeholder="Product Name"
        />

        <input
          onChange={(e) => handleChange(e)}
          className="p-3 shadow-md shadow-[black] outline-none"
          name="price"
          type="text"
          placeholder="Price"
        />

        <input
          onChange={(e) => handleChange(e)}
          className="p-3 shadow-md shadow-[black] outline-none"
          type="text"
          name="category"
          placeholder="Select Category"
        />

      
        <label htmlFor="file"> 

        <input
        onChange={handleImgUpload}
        name="img"
        className="p-3 shadow-md shadow-[black] outline-none" type="file" id="file"/>
        Upload Product Image
        </label>

        <textarea
          onChange={(e) => handleChange(e)}
          className="h-[10rem] resize-none shadow-md shadow-[black] outline-none"
          name="textarea"
          id="text"
          placeholder="Detailed Product Description"
        ></textarea>

        <div className="flex justify-center">
          <button 
            onClick={handleSubmit}
            className="bg-[#45C9A1] py-3 px-20 rounded-full text-md font-bold text-white "
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
