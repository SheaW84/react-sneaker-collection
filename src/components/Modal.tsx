
import SneakerForm from "./SneakerForm"

type Props = {
    id?: string[];
    open: boolean;
    onClose: ()=> void;
}
const Modal = ( props:Props) => {
    if ( !props.open ) return (<></>)
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-300 bg-opacity-25'
        
        >
            <div
                className='max-w-500px w-2/5 fixed flex z-1 mt-1 bg-white shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <button className="flex justify-start m-1 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center p-1">
                        <SneakerForm id={ props.id } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal