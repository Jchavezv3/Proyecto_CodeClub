import { useState, useEffect } from "react";
import { GETcall, POSTCall, DELETECall, PUTCall } from "../../utils/api.utils";

const defaultProduct = {
    id: "",
    name: "",
    description: "",
};

const useProducts = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [product, setProduct] = useState(defaultProduct);
    const [products, setProducts] = useState([]);
    const [onEditId, setEditId] = useState();

    const fetchProducts = () => {
      GETcall("/products")
        .then(data => {
            setProducts(data)
            setProduct(defaultProduct);
        })
        .catch(error => setErrorMessage(error));
    };

    const addProduct = () => {
      POSTCall("/products/add", product)
        .then(data => {
            setProducts(data)
            setProduct(defaultProduct);
        })
        .catch(error => setErrorMessage(error));
    };

    const udpateProducts = id => {
        PUTCall(`/products/update/${id}`, product)
        .then(data => {
            setProduct(defaultProduct);
            setEditId();
            setProducts(data);
        })
        .catch(error => setErrorMessage(error));
    };

    const deleteProduct = id => {
        DELETECall(`/products/remove/${id}`)
        .then(data => {
            setProducts(data);
        })
        .catch(error => setErrorMessage(error));
    };

    const saveProduct = () => {
        onEditId ? udpateProducts(onEditId) : addProduct();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        product,
        setProduct,
        errorMessage,
        setErrorMessage,
        products,
        setProducts,
        saveProduct,
        deleteProduct,
        setEditId,
        onEditId,
        fetchProducts,
    }
};

export default useProducts;