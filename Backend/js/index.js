import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css'
import { Home } from './components/Home';
import { PDFFile } from './components/PDFFile';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Navigate to="/dashboard" replace />} />
            <Route path="/pdf_file" element={<PDFFile />} />
        </Routes>
    </BrowserRouter>
);