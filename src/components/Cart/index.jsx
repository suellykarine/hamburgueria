import CartTotal from "../CartTotal";
import "./style.css";

const Cart = ({ currentSale, setCurrentSale, handleRemover }) => {
  function removerTodos() {
    setCurrentSale([]);
  }

  return (
    <div className="carrinho">
      <div className="div-carrinho-inicio">
        <h1>Carrinho de Compras</h1>
      </div>
      {currentSale.length > 0 ? (
        <div className="div-itens-total-carrinho">
          <ul className="ul-carrinho">
            {currentSale.map((itemCarrinho, index) => {
              return (
                <li key={index}>
                  <div className="teste3">
                    <img
                      className="img-carrinho"
                      src={itemCarrinho.img}
                      alt="produtoitem"
                    />
                    <div className="span-carrinho">
                      <span className="span-produto-carrinho">
                        {itemCarrinho.name}
                      </span>
                      <span className="span-categoria-carrinho">
                        {" "}
                        {itemCarrinho.category}
                      </span>

                      <div>
                        <button
                          className="btn-remover"
                          onClick={() => handleRemover(itemCarrinho.id)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <CartTotal currentSale={currentSale} />
          <button
            className="remover-todos "
            onClick={() => removerTodos(currentSale)}
          >
            Remover todos
          </button>
        </div>
      ) : (
        <img className="img-inicio-carrinho" src="frame122.png" alt="inicio" />
      )}
    </div>
  );
};

export default Cart;
