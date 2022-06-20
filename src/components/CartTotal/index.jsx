import "./style.css";

const CartTotal = ({ currentSale }) => {
  const total = currentSale.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.price,
    0
  );

  return (
    <div className="div-total ">
      <span className="total">Total </span>
      <span className="valor">R$ {total.toFixed(2).replace(".", ",")}</span>
    </div>
  );
};

export default CartTotal;
