import {Route, Redirect} from "react-router-dom";


//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

import temp from "./Components/temp";
//pages
import Home from "./Page/Home";

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery" />
    </Route>
    <HomeLayoutHOC path="/:type" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id" exact component={temp}/>
    <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={temp}/>
    <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={temp}/>
    <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={temp}/>
    <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={temp}/>
    <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={temp}/>
    </>
    );
}

export default App;
