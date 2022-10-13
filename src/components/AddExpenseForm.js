import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
    const { dispatch} = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    

    const onSubmit = (event) => {
        event.preventDefault()
        //alert('name' + name + 'cost' + cost)
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense

        })

    }
    return ( 
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sn">
                    <label for='name'>Name</label>
                    <input 
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        ></input>
                </div>
                <div className="col-sn">
                    <label for='cost'>Cost</label>
                    <input
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        ></input>
                </div>
                <div className="col-sn">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </form>
     );
}
 
export default AddExpenseForm
