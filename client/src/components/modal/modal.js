import React from "react";
import "./model.css";
import { Col, Row, Container } from "../../components/Grid";

//({ handleClose, show, children ,userid, username })
const Modal = props => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
  return (
    
    <div className={showHideClassName}>
    <section className='modal-main'>
      <Container fluid>
        <Row>
         
            <Col size="md-4"></Col>

            <Col size="md-4">
              <img class="img" src={props.avatarUrl} alt="imge" />
              <h3 className="h1">{props.name},&nbsp;{props.Gender}&nbsp;,{props.Age}&nbsp;yrs</h3>
            </Col>
            <Col size="md-4"></Col>
      
        </Row>

        <Row>
          <Col size="md-3"></Col>

          <Col size="md-5">

            <h3 className="h3"><h2>&nbsp;&nbsp;About me</h2>{props.About_me}</h3>

          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row>
          <Col size="md-3"></Col>

          <Col size="md-5">
            <h3 className="i1">{props.interestIn}</h3>
          </Col>
          <Col size="md-4"></Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <Col size="md-3">
          <h4><img src="https://png.icons8.com/color/40/000000/marker.png"/>{props.location}</h4>
          </Col>
          <Col size="md-5">
          </Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <Col size="md-3">
           <img src="https://png.icons8.com/ios/48/000000/contacts-filled.png"/>{props.contact_number}
          </Col>
          <Col size="md-5">
          </Col>
        </Row>

       
          <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
          <img className="eimg" src="https://png.icons8.com/dusk/80/000000/gmail.png"/>&nbsp;{props.email}
          </Col>
          <Col size="md-4">
          </Col>
        </Row>
        

      </Container>
      <button onClick={props.handleClose}  >  Close </button>
      {/* //   <section className='modal-main'>
      //   <p>{props.userid}</p>
      //   <p>Name: {props.name}</p>
      //   <p>Gender:{props.Gender}</p>
      //   <p>Age: {props.Age}</p> 
      //   <p>About_me: {props.About_me}</p>
      //     {/* //{children} */}
      {/* //     <button */}
      {/* //       onClick={props.handleClose} */}
      {/* //     > */}
      {/* //       Close */}
      {/* //     </button> */}
      {/* //   </section> */}
      </section>
    </div>
    
  );
};


export default Modal;

