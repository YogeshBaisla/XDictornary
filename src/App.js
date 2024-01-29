import logo from './logo.svg';
import {useState,useEffect} from "react"
function App() {
  const [search,setSearch] = useState("")
  const [meaning,setMeaning] = useState(" ")
  const dictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  const onHandle = ()=>{
    if(search === ""){
      setMeaning(" ")
    }
    else{
    const word_meaning =dictionary.filter(entry =>
      entry.word.toLowerCase().includes(search.toLowerCase())
    
  );
  setMeaning(word_meaning[0]["meaning"])}
  }
  return (
    <div>
     <h1>Dictionary App</h1>
     <div>
      <input value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }} placeholder="Search for word..."/>
      <button onClick={onHandle}>Search</button>
     </div>
     <div><strong>Defination:</strong></div>
     <div>{meaning ? <span>{meaning}</span>:<span>Word not found in the dictionary.</span>}</div>
    </div>
  );
}

export default App;
