import React from 'react';
import {Grid,Row,Col, FormGroup,FormControl,Button} from 'react-bootstrap';

const Footer = () => {
    return(
        <div className="container-fluid footer text-center">
<Grid>
  <Row className="show-grid">
    <Col xs={12} md={4}>
      <h4>About Company</h4>
      <div className="about">
        <p>NeoSOFT Technologies is here at your quick and easy service for shooping.</p>
        <h6>Contact information</h6>
        <p>Email: contact@neosofttech.com</p>
        <p>Phone: +91 0000000000</p>
        <p>MUMBAI, INDIA</p>
      </div>
    </Col>
    <Col xs={12} md={4}>
      <h4 className="text-center">Information</h4>
      <ul className="footer-ul">
        <li><a href="http://180.149.241.208:3001/info/terms-conditions">Terms & Conditions</a></li>
        <li><a href="http://180.149.241.208:3001/info/guarantee-return-policy">Guarantee & Return Policy</a></li>
        <li><a href="http://180.149.241.208:3001/info/contact-us">Contact us</a></li>
        <li><a href="http://180.149.241.208:3001/info/privacy-policy">Privacy Policy</a></li>
        <li><a href="http://180.149.241.208:3001/info/locate-us">Locate Us</a></li>
      </ul>
    </Col>
    <Col xs={12} md={4}>
      <h4>Newsletter</h4>
        <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
        <FormGroup>
            <FormControl type="text" placeholder="your email... "/><br/>
            <Button>Subscribe</Button>
        </FormGroup>
    </Col>
  </Row>
</Grid>
<div className="container text-center">
<p className="copyright">Copyright © 2017 NeoSOFT Technologies All rights reserved | Design by <a href="http://www.neosofttech.com/">NeoSOFT Technologies</a></p>
</div>
</div>
    )
}

export default Footer;