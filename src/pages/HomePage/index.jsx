import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { API } from "../../services/Api";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isCartModal, setIsCartModal] = useState(false);

  // useEffect montagem - carrega os produtos da API e joga em productList (FEITO)
  // useEffect atualização - salva os produtos no localStorage (carregar no estado)
  // adição, exclusão, e exclusão geral do carrinho
  // renderizações condições e o estado para exibir ou não o carrinho
  // filtro de busca
  // estilizar tudo com sass de forma responsiva

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await API.get("/products");

        setProductList(data);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  return (
    <>
      <Header />
      <main>
        <ProductList productList={productList} />

        {isCartModal && <CartModal cartList={cartList} setIsOpen={setIsCartModal} />}

        <button onClick={() => setIsCartModal(true)}>Abrir modal</button>
      </main>
    </>
  );
};
