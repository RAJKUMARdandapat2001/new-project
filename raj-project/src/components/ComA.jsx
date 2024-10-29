import React, { useState } from 'react'
import ComB from './ComB'

export const userDetailContext = React.createContext(null)

export default function ComA() {
    const [userDetails, setDetails] = useState({ name: "raj", age: 20, toggle: false })
    let changeDetails = () => {
        if (userDetails.toggle === false)
            setDetails({ ...userDetails, name: "sayan sen", age: 22, toggle: true })
        else
            setDetails({ ...userDetails, name: "gupta sen", age: 23, toggle: false })
    }
    return (
        <div className='box'>
            <p>comA</p>
            <userDetailContext.Provider value={{ userDetails, changeDetails }}>
                <ComB></ComB>
            </userDetailContext.Provider>
        </div>
    )
}

