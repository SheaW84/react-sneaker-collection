import DataTable from "../components/DataTable"
import Background from "../assets/images/neon-shoe.jpg"

const Dashboard = () => {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}} 
    className='mx-auto bg-cover bg-fixed bg-slate-700 bg-blend-multiply h-screen'
      >
      <DataTable/>
    </div>
  )
}

export default Dashboard