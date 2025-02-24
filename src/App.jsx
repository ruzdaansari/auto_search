import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [userData, setUserData] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [cache,setCache] = useState({})

  const inputChangeHandler = (e) => {
    setUserData(e.target.value);
  };

  const focusHandler = () => {
    setIsInputFocus(true);
  };

  useEffect(() => {
    // console.log(cache[userData],"cache calleddddd",userData);
    
    if(cache[userData]){
      setFetchData(cache[userData]);
      return
    }

    const fetchDataHandler = async () => {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${userData}`
      );
      const data = await response.json();
      setFetchData(data.recipes);
      setCache(prevState=> ({...prevState,[userData]:data.recipes}))
    };


    let timer = setTimeout(()=>fetchDataHandler(),300)

    return ()=> {
      clearTimeout(timer);
    }
    
  }, [userData]);


  const keyBoardHandler = (e) => {
    if (fetchData.length === 0) return;
    // e.preventDefault();
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => {
        if (prevIndex === fetchData.length - 1) {
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
      setUserData(fetchData[selectedIndex]?.name || "")

    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => {
        if (prevIndex > 0) {
          return 0;
        } else {
          return prevIndex - 1;
        }
      });
      setUserData(fetchData[selectedIndex]?.name || "")
    }
  };

  // useEffect(()=>{
  //   console.log(userData.length,"hhhhhhhhhhh",selectedIndex,fetchData.length);
    
  //   if(userData.length == 0 && fetchData.length>=0){

  //     console.log(fetchData[selectedIndex]?.name, "checkingggggggggg");
  //   setUserData(fetchData[selectedIndex]?.name)
  //   }
  // },[selectedIndex])


  return (
    <div className="wrapper">
      <h2>Auto Complete Search</h2>
      <input
        type="search"
        placeholder="search the recepies name"
        onFocus={focusHandler}
        onChange={(e) => inputChangeHandler(e)}
        onKeyDown={(e) => keyBoardHandler(e)}
        onBlur={()=>{setIsInputFocus(false)}}
        value={userData}
      ></input>
      {isInputFocus && (
        <div className="listContainer">
          <ol>
            {fetchData?.map((_el, i) => (
              <li
                key={_el.id}
                id={_el.id}
                tabIndex={0}
                onMouseDown={() => {
                  console.log("onClick on listtttttttttt");
                  
                  setUserData(_el.name);
                  setIsInputFocus(false);
                }}
                className={i === selectedIndex ? "selected":""}
              >
                {_el.name}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;

