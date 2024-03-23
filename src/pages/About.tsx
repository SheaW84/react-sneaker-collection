import Background from "../assets/images/whole-lot-nike.jpg"
import orangesneaks from "../assets/images/orange-sneaks.jpg"
function About() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-col mx-auto bg-cover bg-fixed bg-slate-700 bg-blend-multiply h-screen'
    >
      <div className="flex font-display text-white justify-center text-4xl p-5">
        About
      </div>
      <div className="m-3 flex flex-row">
        <div className=" ml-6 border border-white flex text-white w-1/2 rounded bg-white bg-opacity-50 p-3">
        This web application is for the sneaker enthusiast. Those who would camp outside the store waiting for the latest and 
        greatest to drop. Or just those who need to keep track of every sneaker they own for some reason. 
        </div>
        <div className=" ml-14 border rounded w-1/3">
          <img src={orangesneaks} alt="Multicolor shoes"></img>

        </div>
      </div>
      
    </div>
  )
}

export default About
