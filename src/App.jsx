import "./App.css";
import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [exibirTextoPesquisa, setExibirTextoPesquisa] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  function showProducts() {
    let listaProdutosFiltrada = [];

    listaProdutosFiltrada = products.filter(
      (valorAtual) =>
        valorAtual.category
          .toLowerCase()
          .includes(textoPesquisa.toLowerCase()) ||
        valorAtual.name.toLowerCase().includes(textoPesquisa.toLowerCase())
    );

    textoPesquisa === ""
      ? setExibirTextoPesquisa(false)
      : setExibirTextoPesquisa(true);

    setFilteredProducts(listaProdutosFiltrada);
  }

  function handleClick(productId) {
    let produtoEncontrado = products.find(
      (produto) => produto.id === productId
    );
    const produtoExistente = currentSale.find(
      (produto) => produto === produtoEncontrado
    );

    if (!produtoExistente) {
      setCurrentSale([...currentSale, produtoEncontrado]);
    }
  }

  function handleRemover(idProduto) {
    const listaItensCarrinho = currentSale.filter(
      (itemCarrinho) => itemCarrinho.id !== idProduto
    );

    setCurrentSale(listaItensCarrinho);
  }

  return (
    <div className="App">
      <div className="div-cabecalho">
        <div className="div-burguer">
          <img src="./burguer.png" alt="burguer-kenzie"></img>
        </div>
        <div className="div-input">
          <input
            type="text"
            placeholder="Digitar pesquisa"
            value={textoPesquisa}
            onChange={(e) => setTextoPesquisa(e.target.value)}
          />
          <button className="btn-pesquisar" onClick={showProducts}>
            Pesquisar
          </button>
        </div>
      </div>
      <div className="div-conteudo-pagina">
        <div className="div-lista-produtos">
          {exibirTextoPesquisa ? (
            <div className="div-resultado">
              <h2>Resultado para: </h2>
              <h2 className="texto-pesquisa">{textoPesquisa}</h2>
            </div>
          ) : (
            ""
          )}
          <ProductsList
            listaProdutos={filteredProducts}
            handleClick={handleClick}
          />
        </div>
        <div className="div-carrinho-compras">
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleRemover={handleRemover}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
