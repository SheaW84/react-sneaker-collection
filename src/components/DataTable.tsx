import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useGetData from "../custom-hooks/FetchData";

const columns: GridColDef[]=[
    { field: 'id', headerName:'ID', width:90, hide:true },
    { field: 'brand', headerName:'Brand', flex: 1 },
    { field: 'sneaker_name', headerName:'Sneaker Name',flex: 1 },
    { field: 'athletic_style', headerName:'Athletic Style', flex: 1 },
    { field: 'lining_material', headerName:'Lining Material',flex: 1 },
    { field: 'season', headerName:'Season',flex:1}
  ]

function DataTable() {
    let [ open, setOpen ] = useState(false);
  const { sneakerData, getData} = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
      server_calls.delete(selectionModel[0])
      getData();
      console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
  }
  return (
    <div
    
        >
       <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 border text-white rounded m-3 ml-10 hover:bg-green-800 hover:text-white
                    shadow-sm shadow-white hover:shadow-lg hover:shadow-green-400 hover:border-green-800"
                    onClick={() => handleOpen()}
                >
                    Add New Sneaker
                </button>
            </div> 
            <Button onClick={ handleOpen } className="p-3 border text-white rounded m-3 hover:bg-yellow-800 hover:text-white
            shadow-sm shadow-white hover:shadow-lg hover:shadow-yellow-400 hover:border-yellow-800">Update Sneaker</Button>
            <Button onClick={ deleteData } className="p-3 border text-white rounded m-3 hover:bg-red-800 hover:text-white
            shadow-sm shadow-white hover:shadow-lg hover:shadow-red-400 hover:border-red-800" >Delete Sneaker</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col" }
            style={{ height: 400, width: '100%'}}>
                <div className="justify-self-center">
                    <h2 className="p-3 text-white my-2 rounded font-display text-center text-5xl">Your Sneakers</h2>
                </div>
            <DataGrid 
            rows={sneakerData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            sx={{
                borderColor:'primary.light',
                color:'primary.light'
            }}
            />
        </div>
    </div>
  )
}

export default DataTable

