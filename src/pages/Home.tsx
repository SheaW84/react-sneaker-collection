import Background from '../assets/images/red-white-black.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed bg-slate-700 bg-blend-multiply'
    >
      <div className='flex place-items-center h-screen'>
        <h1 className='p-4 text-6xl text-white font-display transition duration-0 ease-in-out hover:duration-300'>Your Sneaker Collection</h1>
      </div>
      
    </div>
  )
}

export default Home
