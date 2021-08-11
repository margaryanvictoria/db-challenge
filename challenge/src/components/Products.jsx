import React, { useState } from 'react';

export default function Products({ products }) {
    const [displayDetails, setDisplayDetails] = useState("")
    const [overlay, setOverlay] = useState(false)

    const collapseCategories = () => {
        return [...products].reduce((acc, v) => {
            return acc.includes(v.category) ? acc : [...acc, v.category];
        }, []);
    };

    if (products.length === 0) return <div className="font-bold text-xl">No such products found.</div>;

    return (
        <div>
            {/* Grab the categories and display them */}
            {/* In each category, map their products accordingly and style */}
            {collapseCategories().map((category, cI) =>
                <div key={cI} className="relative">
                    <h2 className="font-bold text-xl">{category}</h2>
                    {products.filter(p => p.category === category)
                        .map((product, pIndex) =>
                            <div key={pIndex} className="w-72 flex flex-row justify-between">
                                <p className={`flex-auto ${product.inStock ? "text-black" : "text-red-600"}`}>{product.name}</p>
                                <p className="px-1">{product.price}</p>
                                <button className="border border-gray-700 px-1"
                                    onClick={() => {setDisplayDetails(product.name); setOverlay(true);}}>
                                    View Detail
                                </button>
                            </div>
                        )}
                </div>
            )}
            { !overlay ||
                <div 
                    onClick={()=>setOverlay(false)}
                    className="w-screen h-screen fixed flex items-center justify-center z-10 top-0 left-0 bg-black bg-opacity-40">
                    <div className="h-96 w-128 text-center bg-gray-400 text-gray-600 text-2xl">
                        <h2 className="my-44">{displayDetails}</h2>
                    </div>              
                </div>
            }
        </div>
    );
}
