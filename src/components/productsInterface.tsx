interface ProductsInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default ProductsInterface;
