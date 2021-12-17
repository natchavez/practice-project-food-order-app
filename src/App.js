import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const showModalHandler = () => {
    setIsModalHidden(true);
  };

  const hideModalHandler = () => {
    setIsModalHidden(false);
  };

  return (
    <Fragment>
      {isModalHidden && <Cart onHideModal={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
