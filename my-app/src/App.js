import "./App.css";
import Todos from "./components/Todos";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil demo</h1>
        <Todos />
      </div>
    </RecoilRoot>
  );
}

export default App;
