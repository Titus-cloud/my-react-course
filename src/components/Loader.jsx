import loader from "../images/loader.gif"

export default function Loader(){
  return(
    <div className="flex justify-center align-middle h-[100%] w-[100%] bg-[rgba(255,255,255,0.5)] fixed">
      <img className="w-48 h-48 mt-[15%] " src={loader} alt="loading..." />
    </div>
  )
}