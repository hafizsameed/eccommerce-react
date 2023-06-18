import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./content/Home";
import Navbar from "./head/Navbar"
import Shop from "./content/Shop";
import Purchase from "./content/Purchase";
import Cart from "./content/Cart";
import { Provider } from "react-redux";
import DataContainer from "./content/dataContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Navbar />

        <div className="contetnt">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path={`/shop/purchase/:type/:id`} element={<Purchase />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <DataContainer /> */}

        </div>

      </Router>
    </Provider>

  );
}

export default App;
