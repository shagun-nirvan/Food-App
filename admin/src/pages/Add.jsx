import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
const [image, setImage] = useState(false); // store selected file
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [category, setCategory] = useState('Salad')
  

   
    

   
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
       const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", Number(price)); 
        formData.append("category", category); 

        image && formData.append("image",image);

     

      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        
        setImage(false);
        setName('')
        setDescription('')
        setPrice('')
        setCategory('Salad')
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
}
  };
  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]'>
      <form onSubmit={onSubmitHandler} className='gap-[20px] flex flex-col gap-[10px]'>
        <div className='add-img-upload flex flex-col gap-[10px]'>
          <p className='text-3xl'>Upload Image</p>
          <label htmlFor="image">
            <img className='w-[120px]' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
          </label>
        </div>
        <div className="w-[max(40%,280px)] flex flex-col gap-[10px]">
          <p>Product Name</p>
          <input onChange={(event)=>setName(event.target.value)} value={name} className='p-[10px] border-1' type="text" name='name' placeholder='Type here' />
        </div>
        <div className="w-[max(40%,280px)] flex flex-col gap-[10px]">
          <p>Product Description</p>
          <textarea onChange={(event)=>setDescription(event.target.value)} value={description} className='p-[10px] border-1' name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className="flex gap-[30px]">
          <div className='add-category flex flex-col gap-[10px]'>
            <p>Product Category</p>
            <select onChange={(event)=>setCategory(event.target.value)} value={category} className='max-w-[120px] p-[10px] border-1' name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex flex-col gap-[10px]'>
            <p>Product price</p>
            <input onChange={(event)=>setPrice(event.target.value)} value={price} className='border-1 p-[10px]' type="Number" name='price' placeholder='₹100' />
          </div>
        </div>
        <button type='submit' className='max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Add