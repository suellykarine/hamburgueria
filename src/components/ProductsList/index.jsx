import "./style.css";

import Product from "../Product/";

const ProductsList = ({ listaProdutos, handleClick }) => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul className="lista-produtos">
        {listaProdutos.map((produto, index) => {
          return (
            <li className="teste-li" key={index}>
              <Product produto={produto} handleClick={handleClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
