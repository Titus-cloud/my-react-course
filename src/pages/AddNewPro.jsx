export default function AddNewPro(){
  return(
    <div className="container mx-auto ">
      <h1 className="text-center text-2xl font-bold p-5">Add New Product</h1>
      <form className="flex flex-col border-solid border-2 px-12 py-7 gap-10 mb-10">
        <input className="p-3 shadow-md shadow-[black] outline-none" type="text" placeholder="Product Name" />
        <input className="p-3 shadow-md shadow-[black] outline-none" type="text" placeholder="Price" />
        <input className="p-3 shadow-md shadow-[black] outline-none" type="text" placeholder="Select Category" />
        <input className="p-3 shadow-md shadow-[black] outline-none" type="file" id="file"/>
        {/* <label htmlFor="file"> Upload Product Image</label> */}
        <textarea className="h-[10rem] resize-none shadow-md shadow-[black] outline-none" name="text" id="text" placeholder="Detailed Product Description"></textarea>
        <div className="flex justify-center">
        <button className="bg-[#45C9A1] py-3 px-20 rounded-full text-md font-bold text-white ">Add Product</button>
        </div>
      </form>
    </div>
  )
}