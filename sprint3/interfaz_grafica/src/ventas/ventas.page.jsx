import './ventas.styles.scss';
import ProductsList from './components/ventas-list.component';
import useProducts from "./hooks/ventas.hook";

const Products = () => {
  const {
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
  } = useProducts();

  const handleOnChange = (event, key) => {
    setErrorMessage('');
    setProduct({
      ...product,
      [key]: event.target.value
    });
  };
  
  const handleOnClick = () => {
    const isValid = product?.id && product?.name !== '' && product?.description !== '';
    const errorMessage = 'Los campos marcados con * son obligatorios';
    if (isValid) {
      saveProduct();
    } else {
      setErrorMessage(errorMessage);
    }
  };

  const handleOnClickCancel = () => {
    setEditId(false);
    fetchProducts();
  };

  const modifyProduct = (id, isEdit) => {
    if(isEdit) {
      setEditId(id);
      setProduct(products.find(productItem => productItem.id === id));
      setProducts(products.filter(productItem => productItem.id !== id));
    } else {
      deleteProduct(id);
    }
  }; 

  return (
    <section className="products-container">
      <ProductsList
        productsList={products}
        modifyProduct={modifyProduct}
      />
      <span className="error-message">{errorMessage}</span>
      <section className="form-container">
        <label>Identificador <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleOnChange(event, 'id')}
            value={product?.id}
          />
        </section>
        <label>Nombre del producto <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleOnChange(event, 'name')}
            value={product?.name}
          />
        </section>
        <label>Precio <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleOnChange(event, 'description')}
            value={product?.description}
          /> 
        </section>
        <section className="form-button">
          <button onClick={handleOnClick}>{onEditId ? "Modificar" : "Agregar"}</button>
          {onEditId ? <button onClick={handleOnClickCancel}>Cancelar</button> : <></>}
        </section>
      </section>
    </section>
  );
};

export default Products;
