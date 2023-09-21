import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const DatesList = ({Persons}) => {
    return ( 
        <Row  className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle p-2">

           

            {Persons.length ? (Persons.map((item) => {

              return (
              <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                <img
                  className="img-avatar"
                  src={item.img}
                  alt="person"
                />
                <div className="px-3">
                  <p className="d-inline Fs-5">{item.name}</p>
                  <p className="Fs-6">{item.time}</p>
                </div>
              </div>
              )
              
            })) : (
              <h2 className="text-center my-3" style={{color:"red"}}>لا يوجد مواعيد لهذا اليوم</h2>
            )
          
          }
              

            </div>
          </Col>
        </Row>
     );
}
 
export default DatesList;