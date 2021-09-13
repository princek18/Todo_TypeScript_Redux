import React, { useState } from 'react'
import {add, delete1} from '../redux/actions'
import { connect } from 'react-redux';
import { stateType } from '../redux/reducers';

interface props{
    data: stateType[],
    add: (s:string) => void,
    delete1: (s:string) => void
}

const DisplayConnect:React.FC<props> = ({data, add, delete1}) => {
    const [value, setValue] = useState<string>("");
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        add(value);
        setValue("");
    }

    const update = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    }
    return (
        <div>
            <h1>This is DispayConnect Component!</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="Enter Task:" onChange={update} value={value}/>
            <button>Add</button>
            {data.map((one) => {
                return <h1 style={{cursor:"pointer"}} onClick={() => delete1(one.value)} key={one.value}>{one.value}</h1>
            })}
            </form>
        </div>
    )
}
const setStateToProps = (state:stateType[]) => {
    return {
        data: state
    }
}

const setDispatchToProps = (dispatch:any) => {
    return {
        add: (s:string) => dispatch(add(s)),
        delete1: (s:string) => dispatch(delete1(s))
    }
}

export default connect(setStateToProps, setDispatchToProps)(DisplayConnect);