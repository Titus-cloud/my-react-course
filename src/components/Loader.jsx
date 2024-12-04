import loader from "../images/loader.gif"

export default function Loader(){
  return(
    <div className="flex justify-center align-middle h-[100vh] w-[100vw] bg-[rgba(255,255,255,0.2)] absolute top-10">
      <img src={loader} alt="loading..." />
    </div>
  )
}