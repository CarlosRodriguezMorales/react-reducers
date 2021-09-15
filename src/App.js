import { Contador } from "./Components/Contador";
import { ContadorMejorado } from "./Components/ContadorMejorado";
import CrudApi from "./Components/CrudApi";
import ShoppingCard from "./Components/ShoppingCard";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr/>
      <CrudApi/>
      <hr/>
      <ShoppingCard/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
