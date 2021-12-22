import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const showModalHandler = () => {
    setIsModalHidden(true);
  };

  const hideModalHandler = () => {
    setIsModalHidden(false);
  };

  return (
    <CartProvider>
      {isModalHidden && <Cart onHideModal={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
