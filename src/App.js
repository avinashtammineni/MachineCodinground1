import "./styles.css";
import sportsArray from "./data";
import { useEffect, useState } from "react";

export default function App() {
  const [val, setVal] = useState();
  const [sports, setSports] = useState(sportsArray);
  const handleChange = (sport, index) => {
    setVal(index);
  };

  useEffect(() => {}, [sports]);
  const handleDelete = (sport) => {
    const filteredSports = sports.filter((x) => x !== sport);
    setSports(filteredSports);
    setVal(false);
  };
  return (
    <div className="App">
      {sports.map((sport, index) => {
        return (
          <div className="Sports_section" key={index}>
            <input
              type="checkbox"
              onChange={() => handleChange(sport, index)}
              checked={val === index}
            />
            <span>{sport}</span>
            {val === index ? (
              <button onClick={() => handleDelete(sport)}> delete</button>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
