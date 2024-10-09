import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import ShowProducts from '../ProductCard/Productcard'
export default function Mainproduct() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const getProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setFilter(data); // Initialize filter with all products
        } catch (error) {
            setErr(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const filterProducts = (cat) => {
        const updatedProducts = products.filter((product) => product.category === cat);
        setFilter(updatedProducts);
    };

    const Loading = () => {
        return <h1>Loading....</h1>;
    };

    const ShowProducts = () => {
        return (
            <>
                {/* <button onClick={() => setFilter(products)}>All</button>
                <button onClick={() => filterProducts("men's clothing")}>Men</button>
                <button onClick={() => filterProducts("women's clothing")}>Women</button>
                <button onClick={() => filterProducts("jewelery")}>Jewelry</button>
                <button onClick={() => filterProducts("electronics")}>Electronics</button> */}



                {/* //=========================================================== */}
                <div className="md:inline-flex  mx-4 md:mx-40 gap-8 border mb-5 rounded-md shadow-sm" role="group">
  <button onClick={() => setFilter(products)} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    All Products
  </button>
  <button onClick={() => filterProducts("men's clothing")} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Man 's clothing
  </button>
  <button  onClick={() => filterProducts("women's clothing")} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Women's clothing
  </button>
  <button onClick={() => filterProducts("jewelery")} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Jewelery
  </button>
  <button onClick={() => filterProducts("electronics")} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Electronics
  </button>
</div>


                {/* ============================================================== */}
                
                <div className=" flex flex-wrap gap-14 items-center justify-center">
                    {filter.map((product) => (
                        //=============================================================

                        <>
                         <div className=" flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div className=" w-[200px] h-[330px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center">
  <a href="#">
    <img
      className=" h-[180px]  w-[270px] p-8 rounded-t-lg w-68 border rounded"
      src={product.image}
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className=" text-4 tracking-tight text-gray-900 dark:text-white">
        {product.title.slice(0, 30)}.....
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        {product.rating.rate}
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className=" font-bold text-gray-900 dark:text-white">
        ${product.price}
      </span>
      <Link to={`/product/${product.id}`}      
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Buy Now
      </Link>
    </div>
  </div>
</div>
  
</div>
                        
                        </>

                        //===========================================================
                    ))}
                </div>
            </>
        );
    };

    return (
        <>
            <h1 className="text-center mb-4 text-3xl">All Products</h1>
    
            <div>{loading ? <Loading /> :
             <ShowProducts setFilter={setFilter} products ={products} filterProducts ={filterProducts}/>
             
             
             }</div>
            {err && <p>Error: {err}</p>}
        </>
    );
}
