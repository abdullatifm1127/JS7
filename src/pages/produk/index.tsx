import { useRouter } from "next/router";
import {useEffect, useState} from "react";

type ProducType = {
    id: string;
    nama: string;
    price: number;
    size: string;
}

const Produk = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const router = useRouter();
    const [products, setProducts]=useState([]);

  useEffect(() => {
    fetch("/api/produk")
    .then((response) => response.json())
    .then((responsedata) =>{
        setProducts(responsedata.data);
    })
    .catch((error) =>{
            console.error("Error fetching data:", error);
    })
        }
    ,[]);

    return (
        <div>
            <h1>Daftar Produk</h1>
            {products.map((product: ProducType) => (
                <div key={product.id}>
                    <h2>{product.nama}</h2>
                    <p>Harga: {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                </div>
            ))}
                </div>
    );
      
};

export default Produk;