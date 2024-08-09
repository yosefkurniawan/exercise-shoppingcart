import './App.css';
import ProductList from './components/ProductList';
import CartCounter from './components/CartCounter';

function App() {
  return (
    <div className="App">
      <CartCounter/>
      <ProductList/>
    </div>
  );
}

export default App;
