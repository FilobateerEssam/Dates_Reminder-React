import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const DatesAction = ({onDelete , onSelect}) => {
    return ( 

        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between ">
            <button onClick={onDelete} className="btn-style p-2">مسح الكل </button>
            <button onClick={onSelect} className="btn-style p-2"> عرض البيانات</button>
          </Col>
        </Row>

     );
}
 
export default DatesAction;