import React from "react";

// styles
import './ventas-list.styles.scss';

// components
import ProductItem from "./venta-item.component";



const ProductsList = ({ productsList, modifyProduct }) => {
  return (
    <>
      {productsList.length > 0 ?
        <section className="list-container">
          <section className="title">Ventas</section>
          <section className="table-header">
            <span>Identificador</span>
            <span>Nombre del producto</span>
            <span>precio</span>
          </section>
          {productsList?.map((productItem, index) => 
            <ProductItem 
              key={index} 
              productItem={productItem}
              modifyProduct={modifyProduct}
            />
          )}
        </section>
      : <></>}
    </>
  );
};

export default ProductsList;
