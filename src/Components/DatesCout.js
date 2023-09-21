import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const DatesCount = ({Persons}) => {
    return ( 
        <Row className="justify-content-center my-2">
          <Col sm="8" className="">
            لديك {Persons.length} مواعيد اليوم
          </Col>
        </Row>
     );
}
 
export default DatesCount;