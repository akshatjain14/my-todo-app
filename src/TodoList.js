import React from 'react'
import { db } from './firebaseConfig'

export default function TodoList({Task,Status,id,Time}) {
    const editStatus = () =>{
           db.collection("mytodo").doc(id).update({
               Status:!Status
           }) 
    }
    const deleteTodo = () => {
        db.collection("mytodo").doc(id).delete();
    }

    return (
            <div className={Status ? "card mx-3 my-2 col-4 bg-success": "card mx-3 my-2 col-4 bg-primary"}>
                <div className="card-body">
                    <h5 className="card-title text-dark">{Task.toUpperCase()}</h5>
                    <h4 className="card-subtitle text-warning">{Status ? "DONE" : "PENDING" }</h4>
                    <h6 className="my-2">created at {Time}</h6>
                    <button 
                    type="button" 
                    className={Status ?"btn btn-primary mx-2":"btn btn-success mx-2"}
                    onClick={editStatus}
                    >
                      MOVE TO  {Status ? "PENDING" : "DONE"}
                    </button>
                    <button type="button" class="btn btn-danger mx-2"
                    onClick={deleteTodo}
                    >
                        DELETE</button>
                </div>
            </div>
    )
}
