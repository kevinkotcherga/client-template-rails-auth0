import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product";


export const HeroBanner = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					'http://localhost:3000/products.json',
					{},
				);
				setProducts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProducts();
	}, [products]);

  return (
		<div className="hero-banner">
			{products.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</div>
	);
};
