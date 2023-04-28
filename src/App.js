import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import {fetchCartData, sendCartData} from "./components/store/cart-Action"

let isInitial = true;
function App() {
  
  console.log("isInitial in AppJS", isInitial)
  const dispatch = useDispatch();
  const isCartVisible = useSelector(state => state.isCartVisible);

  const cart = useSelector((state) => state.items);
  // console.log(cart[cart.length-1],"inAppJs");
    console.log(cart,"inAppJs")


  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);
   
  useEffect(() => {
    // console.log("inuseeffect")
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
    
    
  },[cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
