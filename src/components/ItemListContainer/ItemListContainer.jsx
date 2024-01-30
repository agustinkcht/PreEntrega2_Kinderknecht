import React from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../serverMock/productMock.js'
import Spinner from '../commons/Spinner/Spinner.jsx';



const ItemListContainer = ({ greeting }) => {

    const {categoryId} = useParams()

    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const fetchProducts = async () => {
            const asyncFunc = categoryId ? 
                    getProductsByCategory : getProducts;
                    setIsLoading(true)
            try {
                const res = await asyncFunc(categoryId);
                setItems(res);
                setIsLoading(false)
            } catch (err) {
                console.error(err.message);
                setIsLoading(false)
            }
        }; 
        fetchProducts();
    }, [categoryId, setIsLoading]);

    if(isLoading) return <Spinner isLoading={isLoading}/>

    return(
        <div className='container'>
            <h1 className='title'>{greeting}</h1>
            <ItemList items={items}/>
        </div>

    )

}

export default ItemListContainer
