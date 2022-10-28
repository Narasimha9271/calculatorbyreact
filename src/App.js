import{
  useRef,
  useState
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result,setresult]=useState(0);

  const plus = (e) => {
    e.preventDefault();
    setresult((result) => result + Number(inputRef.current.value));
  }

  const minus = (e) => {
    e.preventDefault();
    setresult((result) => result - Number(inputRef.current.value));
  }

  const times = (e) => {
    e.preventDefault();
    setresult((result) => result * Number(inputRef.current.value));
  }

  const divide = (e) => {
    e.preventDefault();
    setresult((result) => result / Number(inputRef.current.value));
  }

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value=0;
  }

  const resetResult = (e) => {
    e.preventDefault();
    setresult((prevVal) => prevVal * 0);
  }
  return (
    <div className="App">
      <div>
        <h1> Simplest Working Calculator</h1>
      </div>
      <form >
        <p ref={resultRef}>{result}</p>
      
      <input 
          pattern = "[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Typa a number"
        /> <br />
      <button onClick={plus}>add</button>
      <button onClick={minus}>subtract</button>
      <button onClick={times}>multiply</button>
      <button onClick={divide}>divide</button>
      <button className="reset" onClick={resetInput}>reset input</button>
      <button className="reset" onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
