import { Button, Col, Form, Row } from "antd"

 
 function NextPrevSubmitButtons({ steps, currentStep, handleNext, handlePrev}) {

          
  return (
      <div className="buttonContainer" style={{   display : 'flex', justifyContent : 'center', alignItems : 'center'  }}>
          <Row style={{ marginLeft : 40}}>
          {currentStep > 0 && (
                     <Col >
                              <Button type="primary" onClick={handlePrev}>
                               Previous
                              </Button>
                     </Col>
                     )}
                     {/* {currentStep < steps.length - 1 && (
                    
                     )} */}
                 
                     <Col style={{ margin : '0 20px'}} onClick={handleNext}>
                               <Button type="primary" htmlType="submit">
                               Next
                               </Button>
                     </Col>
                     {currentStep === steps.length - 1 && (
                     <Col>
                               <Button type="primary" htmlType="submit">
                               Submit
                               </Button>
                     </Col>
                    
           )}
          </Row>
</div>
  )
}

export default NextPrevSubmitButtons
