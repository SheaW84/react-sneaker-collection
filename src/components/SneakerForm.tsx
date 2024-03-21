import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseName, chooseStyle, chooseLining,chooseSeason } from "../redux/slices/RootSlice"

interface SneakerFormProps {
    id?: string[]
}

const SneakerForm = ( props: SneakerFormProps) => {
    const { register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data } ${ props.id }`)
            // setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset();
        }else{
            dispatch(chooseBrand(data.brand));
            dispatch(chooseName(data.sneaker_name));
            dispatch(chooseStyle(data.athletic_style));
            dispatch(chooseLining(data.lining_material));
            dispatch(chooseSeason(data.season));

            server_calls.create(store.getState())
            // setTimeout(() => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <Input {...register('brand')} name ='brand' placeholder="Sneaker Brand"/>
                </div>
                <div>
                    <label htmlFor="sneaker_name">Sneaker Name</label>
                    <Input {...register('sneaker_name')} name ='sneaker_name' placeholder="Sneaker Name"/>
                </div>
                <div>
                    <label htmlFor="athletic_style">Athletic Style</label>
                    <Input {...register('athletic_style')} name ='athletic_style' placeholder="Athletic Style"/>
                </div>
                <div>
                    <label htmlFor="lining_material">Lining Material</label>
                    <Input {...register('lining_material')} name ='lining_material' placeholder="Lining Material"/>
                </div>
                <div>
                    <label htmlFor="season">Season</label>
                    <Input {...register('season')} name ='season' placeholder="Season"/>
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-gray-600 p-2 rounded hover:bg-gray-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SneakerForm