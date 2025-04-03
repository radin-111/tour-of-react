import { use } from 'react'
// import User from './user'
// import User from './user'
import User from './user'

import './App.css'

export default function Users({fetchData}){
    const data = use(fetchData)
    // console.log(data)
    
    return(
        <div className='card'>
            
            <h1>Users : {data.length}</h1>
            {
                data.map(da => <User key={da.id} user={da}></User>)
            }
        </div>
    )
}