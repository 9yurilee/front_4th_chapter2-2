import { useState } from "react";
import { CartPage } from "./pages/CartPage.tsx";
import { AdminPage } from "./pages/AdminPage.tsx";
import { useProducts } from "./hooks";
import { Navigation } from "./components/shared";
import { initialProducts } from "../store/globalStore.ts";

const App = () => {
  const { products, updateProduct, addProduct } = useProducts(initialProducts);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation
        onClick={() => setIsAdmin(!isAdmin)}
        buttonValue={isAdmin ? "장바구니 페이지로" : "관리자 페이지로"}
      />
      <main className="container mx-auto mt-6">
        {isAdmin ? (
          <AdminPage
            products={products}
            onProductUpdate={updateProduct}
            onProductAdd={addProduct}
          />
        ) : (
          <CartPage products={products} />
        )}
      </main>
    </div>
  );
};

export default App;
