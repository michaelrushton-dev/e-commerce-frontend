import { useEffect, createContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';
import './App.css';

export const ListContext = createContext();

function App() {
    const initialState = [];
    const reducer = (state, action) => {
        switch (action.type) {
            case 'fetch':
                state = [...action.data];
                console.log('fetch case');
                return state;
            case 'trigger':
                fetchList();
        }
    };
    const [list, dispatch] = useReducer(reducer, initialState);

    async function fetchList() {
        const response = await fetch('http://localhost/scandiweb_proj/');
        const data = await response.json(response);
        dispatch({ type: 'fetch', data: data });
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <BrowserRouter>
            <ListContext.Provider
                value={{ listState: list, listDispatch: dispatch }}
            >
                <div className='App'>
                    <Routes>
                        <Route index element={<ProductList list={list} />} />
                        <Route path='add-product' element={<ProductAdd />} />
                    </Routes>
                </div>
            </ListContext.Provider>
        </BrowserRouter>
    );
}

export default App;
