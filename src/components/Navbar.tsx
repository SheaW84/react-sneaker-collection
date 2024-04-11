import { useState }from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';


function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

    const signOutOnClick = () => {
        logout();
    }

    const signInOnClick = async () => {
        loginWithRedirect();
    }
    

    const clicked = () => {
        setIsVisible(false)
    }

  return (
  <div className='sticky bg-slate-700 w-full '>
    <nav className='flex items-center justify-between flex-wrap p-3'>
    <div className='flex flex-shrink-0 text-white mr-0'>
        <Link to='/' className='font-normal text-xl tracking-tight m-3 font-display'>Sneaker Collection</Link>
    </div>
    <div className='flex z-10 w-1/2'>
        <div className="text-sm lg:flex-grow flex justify-end"> 
            <Button className='p-3 m-5'>
                <div>
                    <Link to='/' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                    text-gray-500 hover:text-white mr-1'>
                        <span className="material-symbols-outlined">home</span>
                        <div>Home</div>
                    </Link>
                </div>
            </Button>
            <Button className='p-3 m-5'>
                <div>
                    <Link to='/about' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                    text-gray-500 hover:text-white mr-1'>
                        <span className="material-symbols-outlined">question_mark</span>
                        <div>About</div>
                    </Link>
                </div>
            </Button>
         
            <Button className='p-3 m-5'>
                <div>
                    <Link to='/dashboard' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                    text-gray-500 hover:text-white mr-1'>
                        <span className="material-symbols-outlined">dashboard</span>
                        <div>Dashboard</div>
                    </Link>
                </div>
            </Button>
            {
                !isAuthenticated ?          
                <Button className='p-3 m-5'>
                    <div>
                        <Link to='/' onClick={ ()=>{signInOnClick()}} className='flex place-items-center mt-4 lg:inline-block 
                            lg:mt-0 text-gray-500 hover:text-white mr-1'>

                            <span className="material-symbols-outlined">login</span>
                            <div>Login</div>
                        </Link>
                    </div>
                </Button> 
                :
                <Button className='p-3 m-5'>
                    <div>
                        <Link to='/' onClick={ ()=>{signOutOnClick()}} className='flex place-itmes-center mt-4 lg:inline-block 
                            lg:mt-0 text-gray-200 hover:text-blue-600 mr-1'>
                            <span className="material-symbols-outlined">logout</span>
                            <div>Logout</div>
                        </Link>
                    </div>
                </Button>
            }
        </div>
    </div>
    </nav> 
    </div>
   
  )
}

export default Navbar