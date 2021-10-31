import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
// import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import AddPackage from './components/AddPackage/AddPackage';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>

          <Navbar></Navbar>

          {/* <Header></Header> */}
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>

            <Route path="/addpackage">
              <AddPackage></AddPackage>
            </Route>

           

            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>


            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

{/* 
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute> */}
            
            <PrivateRoute path="/servicesdetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>


            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
