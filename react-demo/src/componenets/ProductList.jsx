import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router'

function ProductList() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [filteredProducts,setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    
    console.log(filteredProducts)
    const gotoProduct = (productObj) => {
        navigate('/product',{state:{product : productObj}});
    }

    const handleProduct = (e) => {
        setFilteredProducts(products.filter((productObj) => productObj.category === e));
        // navigate('/product',{state : {product : filteredProducts}});
    }

    useEffect(()=>{
        async function getProducts(){
            setLoading(true)
            try{
                let res = await fetch('https://fakestoreapi.com/products');
                if(!res.ok){
                    throw new Error("Product Not Found");
                }
                const productData = await res.json();
                setProducts(productData);
            }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }
    getProducts();
    }, []);

    if(loading === true){
        return <p className='text-4xl text-red-600'>Loading...</p>
    }
    if(error !== null){
        return <p className='text-4xl text-red-600'>{error.message}</p>
    }
return (
    <div className='text-center'>
        <form action="">
            <div className='mx-auto'>
                <input type="text" placeholder='Search Items...' className='px-10 py-3 border-2 rounded-2xl' onChange={(e) => handleProduct(e.target.value)}  />
            </div>
        </form>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
            {
                (filteredProducts.length > 0 ? filteredProducts : products).map((productObj) => (
                <div onClick={() => gotoProduct(productObj)} key={productObj.id} className='shadow-md p-10 rounded-2xl'>
                <img
                    src={productObj.image}
                    alt=""
                    className='h-44 object-contain block mx-auto mb-10'
                />
                <p>{productObj.title}</p>
                </div>
                ))
            }
        </div>
    </div>
)
}

export default ProductList