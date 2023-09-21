import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Persons from "./data/Data";
import DatesCount from "./Components/DatesCout";
import DatesList from "./Components/DatesList";
import DatesAction from "./Components/DatesAction";
import { useEffect, useState } from "react";

function App() {
  
 const [personData , setPersonData] = useState(Persons);

  const deleteAll = () => {

    setPersonData([]);

  }

  const selectAll = () => {
      
      setPersonData(Persons);
  }

  // when project start with no data

  useEffect(() => {
    
    setPersonData([])
  }, []);
  return (
    <div className="font color-body">
      <Container className="py-5">
        
      <DatesCount Persons={personData} />

        <DatesList Persons={personData} />

        <DatesAction onDelete={deleteAll} onSelect ={selectAll} />

      </Container>
    </div>
  );
}

export default App;
