import { createContext, useState } from "react";

export const ArrayList = createContext([]);

const Container = ({children}) => {

    const [check, setCheck] = useState([]);


    let arr = ["hot", "cold", "humid", "dry", "rainy"];

    const handleOnChange = (event) => {
        let elem = event.target.value;
        if (check.includes(elem)) {
          let newArray = check.filter((items) => items !== elem);
          setCheck(newArray);
        } else {
          setCheck([...check, event.target.value]);
        }
      };
    

  return (
    <>
      <ArrayList.Provider value={{ arr, handleOnChange, check }}>
        {children}
      </ArrayList.Provider>
    </>
  );
};

export default Container;
