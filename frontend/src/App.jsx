//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//component
import temp from "./Components/temp";


function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component={temp}/>
    </>
    );
}

export default App;
