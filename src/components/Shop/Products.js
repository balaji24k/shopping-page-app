import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMYPRODUCTS = [
  {
    id : '1',
    price : 800,
    title : 'Shoes',
    description : 'Blue Colour'
  },
  {
    id : '2',
    price : 15000,
    title : 'Mobile',
    description : '4GB RAM 64GB ROM'
  },
  {
    id : '3',
    price : 1200,
    title : "Power Bank",
    description : '20000 mAH'
  },
  {
    id : '4',
    price : 1800,
    title : 'Charger',
    description : '50W Power'
  }
];

// DUMMYPRODUCTS.map(product => {
//   console.log(product, "dummyproductsBelow");
// })

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product) => (
          <ProductItem
            key = {product.id}
            id = {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            />
        ))}
      </ul>
      {/* <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul> */}
    </section>
  );
};

export default Products;
