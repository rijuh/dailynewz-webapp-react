import './App.css';

import Maincontent from './components/Maincontent';
import Navbar from './components/Navbar';

import news from './samplenews.json'
import data from './props.json';

function App() {
  return (
    <>
      <Navbar data={data} />
      <div className="container my-4">
        <Maincontent news={news}/>
      </div>
    </>
  );
}

export default App;
