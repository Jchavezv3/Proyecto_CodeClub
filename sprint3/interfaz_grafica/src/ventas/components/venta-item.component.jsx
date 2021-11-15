import React from "react";

// styles
import './venta-item.styles.scss';



const ProductItem = ({ productItem, modifyProduct }) => {
  const handleOnClick = (event, id, isEdit = false) => {
    modifyProduct(id, isEdit);
  };
  const { id, name, description } = productItem;

  return (
    <section className="product-container">
      <span>{id}</span>
      <span>{name}</span>
      <span>{description}</span>
      <span><button onClick={event => handleOnClick(event, id, true)}>Editar</button></span>
      <span><button onClick={event => handleOnClick(event, id)}>Eliminar</button></span>
    </section>
  );
};

export default ProductItem;
