import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlide';

export default function ProductList() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddtoCart = (product) => {
        dispatch(addToCart(product));
    }
    
    return (
        <div className="product-list">
            {
                products.map((product, index) => (
                    <div key={index} className="product">
                        <div className="img-wrapper"><img src={product.image}/></div>
                        <p><strong>{product.title}</strong></p>
                        <p>${product.price}</p>
                        <button onClick={() => handleAddtoCart(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}
