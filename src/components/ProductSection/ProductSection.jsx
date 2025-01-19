import './ProductSection.css';

import Image1 from '../../assets/console/console1.png';
import Console2 from '../../assets/console/console2.png';
import Image3 from '../../assets/console/console3.png';
import Image4 from '../../assets/console/console4.png';

const products = [
  {
    name: 'Official Sony DualShock',
    price: '₹3,299.00',
    image: Image1,
  },
  {
    name: 'Sony PlayStation 2',
    price: '₹3,899.00',
    image: Console2,
  },
  {
    name: 'Xbox Series X',
    price: '₹30,000.00',
    image: Image3,
  },
  {
    name: 'PlayStation 3 Slim 120',
    price: '₹24,999.00',
    image: Image4,
  },
];

const ProductSection = () => {
  return (
    <div className="product-section">
      <h2 className="section-title">Console</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-buttons">
              <button className="view-more">View More</button>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection; 