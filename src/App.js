// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import Landing from './Components/eCommerce/Landing';

function App() {
  const data = useSelector((store) => store.FirstReducer);
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
