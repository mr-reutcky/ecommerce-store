import ProductCard from "./ProductCard";

function SimilarProducts({ products}){

   if (!products){
    return (<div>No category</div>);
  }

  return(
    <>
      <h2>Similar products</h2>
      <div className='product-grid'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </>
  );
}

export default SimilarProducts;