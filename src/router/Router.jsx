import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navs from '../components/Navs'
import Home from '../pages/NewHome'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navs />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
