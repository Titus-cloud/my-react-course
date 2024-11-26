export default function Category({ img, name }) {
  return (
    <div className="container  flex justify-between flex-wrap">
      <div className="flex-wrap">
        <div className="bg-[#F0EFEF] h-16 w-16 rounded-[50%] flex justify-center m-auto items-center ">
          <img className="w-8" src={img} alt="" />
        </div>
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
}
