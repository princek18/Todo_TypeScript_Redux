import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add, delete1 } from '../redux/actions';
import { stateType } from '../redux/reducers';


export const Display:React.FC = () => {
    const [value, setValue] = useState<string>("");
    const dispatch = useDispatch();
    const data = useSelector((state:stateType[]) => state);

    const update = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(add(value));
        setValue("");
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Enter Task:" onChange={update} value={value}/>
            <button>Add</button>
            {data.map((one) => {
                return <h1 style={{cursor:"pointer"}} onClick={() => dispatch(delete1(one.value))} key={one.value}>{one.value}</h1>
            })}
            </form>
        </div>
    )
}
