import React, { useState } from "react";
import '../Components/css/App.css'
import CounterClick from "../Components/Counter/Counter"
import ButtonClickMax from '../Components/ButtonClickMax/ButtonClickMax';
import ButtonClickMenos from '../Components/ButtonClickMenos/ButtonClickMenos';
import ButtonClear from "../Components/ButtonClear/ButtonClear";



function App() {

  const [counter, setCounter] = useState(0)

  const onClickMax = () => {
    setCounter(counter + 1)
  }

  const onClickMenos = () => {
    setCounter(counter - 1)
  }

  const onClear= () => {
    setCounter(counter === 0)
  }


  return (
    <React.Fragment>
      <div className="container contInfo">
        <div className="infoCounter">
          <CounterClick
            counter={counter}
          />

          <div className="contBtn">
            <ButtonClickMax
              onClickMax={onClickMax}
            />

            <ButtonClickMenos
              onClickMenos={onClickMenos}
            />
            <ButtonClear
              onClearButton={onClear}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
