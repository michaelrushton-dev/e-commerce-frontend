import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';
import './App.css';

function App() {
    const [list, setList] = useState();

    useEffect(() => {
        async function fetchList() {
            const response = await fetch('http://localhost/scandiweb_proj/');
            const data = await response.json(response);
            setList(data);
        }
        fetchList();
    }, []);

    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route index element={<ProductList list={list} />} />
                    <Route path='add-product' element={<ProductAdd />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
