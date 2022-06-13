
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { Element } from 'react-scroll'
import { Container, Row, Col}from "react-bootstrap/";

import "../CSS/Contact.css"

const author='myamazaki146';
const domain='gmail.com';

const Contact= () => {    

    return (        
        <Element name="contactSection">
            <div className="Contact text-center py-5">
                <Container>
                    <Row>    
                        <h1 className="py-5">Contact</h1>
                    </Row>
                    <Row className="mb-3">
                        <Col md={{span:6, offset:3}}>
                            <h5>{i18n.t('ContactMsg')}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>Email:<a href={"mailto:"+author+"@"+domain}> {author}@{domain}</a></h5>
                        </Col>
                    </Row>
                </Container>
            </div>
       </Element>
    )
}
export default withNamespaces()(Contact);