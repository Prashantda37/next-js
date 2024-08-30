import ProductCard from '@/Componets/ProductCard'

const Products = async () => {
  const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
  }
  const products = await getProducts()

  return (<div className="min-h-screen flex-col p-1 px-6 justify-between">
    <h1 className="text-4xl">Products List</h1>
    {products &&
      <div className="my-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products?.products?.map((item) => (
            <ProductCard key={item.id} card={item} />
          ))}
        </div>
      </div>
    }
  </div>);
}

export default Products;