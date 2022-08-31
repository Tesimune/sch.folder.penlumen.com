import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from './Components/Layouts/Layouts'
import './index.css';
import App from './Pages/App';
import Enrol from './Pages/Enrol.jsx'
import NoPage from './Pages/NoPage.jsx'
import 'flowbite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Layouts>
        <BrowserRouter>
        <Routes>
            <Route>
            <Route index element={<App />} />
            <Route path="home" element={<App />} />
            <Route path="enrol" element={<Enrol />} />
            <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </Layouts>
);