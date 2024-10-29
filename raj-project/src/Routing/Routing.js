import React from 'react'
import { Route, Routes, BrowserRouter as Router, Form } from 'react-router-dom'
import Header from '../layout/Header'
// import Home from '../component/Home'
import FormNew from '../components/FormNew'
import UseRef from '../components/UseRef'
import ComA from '../components/ComA'

const Routing = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    {/* <Route path='' element={<Home />}></Route> */}
                    <Route path='form' element={<FormNew />}></Route>
                    <Route path='useref' element={<UseRef />}></Route>
                    {/* <Route path='useref' element={< />}></Route> */}
                    {/* <Route path='*' element={<PageNotFound />}></Route> */}
                    <Route path='useref' element={<ComA />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routing