import "./style.css";
const Product = ({ produto, handleClick }) => {
  return (
    <div className="teste">
      <div>
        <img src={produto.img} alt="produtoitem" />
      </div>
      <div className="teste2">
        <span className="produto">{produto.name}</span>
        <span className="categoria">{produto.category}</span>
        <span className="preco"> R$ {produto.price}</span>
        <button className="btn-vitrine" onClick={() => handleClick(produto.id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;
