//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//component
import temp from "./Components/temp";
import Master from "./Components/master";



function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component={temp}/>
    <HomeLayoutHOC path="/:type" exact component={Master}/>
    </>
    );
}

export default App;
