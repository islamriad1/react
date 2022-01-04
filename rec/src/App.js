import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setHeros(data))
  }, [])
  // const heros = [{name:'IronMan', power: "Gadgets"},{name:'SpiderMan', power: "WebShoot"},{name: "BatMan", power: "Money"},{name: "AntMan", power:"MiniMax"},{name: "WonderWoman", power:"MindControl"} ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       {
         heros.map( sh => <Hero name={sh.name} key={sh.id} email={sh.email}></Hero>)
       }
       {/* <Hero name={heros[0]} power="Gadgets"></Hero>
       <Hero name={heros[1]} power="WebShoot"></Hero>
       <Hero name="Super" power="Leser"></Hero>
       <Hero name="Bat" power="Money"></Hero> */}
       <WatchedMovies></WatchedMovies>
      </header>
    </div>
  );
}

function WatchedMovies() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <h5>{count} movies</h5>
      <button onClick={handleClick}>Add Movie</button>
      <MovieActed movie={count + 5}></MovieActed>
    </div>
  )
}
function MovieActed (props) {
  return (
    <h4>I have acted on {props.movie}</h4>
  )
}


function Hero(props) {
  const heroStyle ={
    border: '1px solid purple',
    margin: '10px 0'
  }
  return (
    <div style ={heroStyle}>
      <h4>I'm {props.name}</h4>
      <h5>My Email is {props.email}</h5>
    </div>
  )
}

export default App;
