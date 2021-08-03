import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DocTileOne from './components/DocTileOne';
import DocTileTwo from './components/DocTitleTwo';



function App() {
  return (
    <div className="App">
     <DocTileOne />
     <DocTileTwo />
         <div>
           <CounterOne />
           <CounterTwo />
         </div>    
    </div>
  );
}

export default App;
