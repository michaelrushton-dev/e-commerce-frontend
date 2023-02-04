import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
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
        <div className='App'>
            <ProductList list={list} />
        </div>
    );
}

export default App;
