import Input from "../shared/Input.tsx";
import React from "react";
import Button from "../shared/Button.tsx";
import { Product } from "../../../types.ts";

interface NewProductFormProps {
  newProduct: Product;
  setNewProduct: (newProduct: Product) => void;
  handleAddNewProduct: () => void;
}

const NewProductForm = ({
  newProduct,
  setNewProduct,
  handleAddNewProduct,
}: NewProductFormProps) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
      <div className="mb-2">
        <Input
          label="상품명"
          labelType="newItem"
          id="productName"
          type="text"
          value={newProduct.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <Input
          label="가격"
          labelType="newItem"
          id="productPrice"
          value={newProduct.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewProduct({
              ...newProduct,
              price: parseInt(e.target.value),
            })
          }
        />
      </div>
      <div className="mb-2">
        <Input
          label="재고"
          labelType="newItem"
          id="productStock"
          value={newProduct.stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewProduct({
              ...newProduct,
              stock: parseInt(e.target.value),
            })
          }
        />
      </div>
      <Button onClick={handleAddNewProduct}>추가</Button>
    </div>
  );
};

export default NewProductForm;
