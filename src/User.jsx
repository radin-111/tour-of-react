import { use } from "react";

export default function User({user}){
    const {name,phone} = user;
    // console.log(user)

    return(
        <div className="card">
            <h1>name : {name}</h1>
            <p>Phone : {phone}</p>
        </div>
    )
}