import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {  
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order review">
            <OrderReview></OrderReview>
          </Route>
          <PrivateRoute path="/manage inventory">
            <ManageInventory></ManageInventory>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/shop/product/:productKey'>
            <ProductDetails/>
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>

  );
}

export default App;
