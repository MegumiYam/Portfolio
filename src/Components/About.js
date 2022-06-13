import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { Element } from 'react-scroll'
//Component
import HardSkills from "./HardSkills"
import SoftSkills from "./SoftSkills"

// CSS
import "../CSS/About.css"

const About= () => {    

    return (
        <Element name="aboutSection">
        <div className="About pt-5">
            <Container className="text-center">
                <Row className="pt-3">
                    <Col className="py-5">
                        <h1>About Me</h1>
                        <p className="py-2 w-50 mx-auto">{i18n.t('Objects')}</p>
                        <Button variant="outline-secondary">
                            <a href="https://docs.google.com/document/d/1DY0OpVFk8cbDVZxrPTmGGzne8e89dpx5f6o-_P5NxsI/" target="_blank" rel="noreferrer">
                                Resume(EN)
                            </a>    
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Tabs defaultActiveKey="hardSkills" tabClassName="text-left" id="uncontrolled-tab-example" className="justify-content-center my-3">
                        <Tab eventKey="hardSkills" title="Hard Skills">
                            <HardSkills />
                        </Tab>
                        <Tab eventKey="softSkills" title="Soft Skills">
                            <SoftSkills />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
        </Element>
    )
}
export default withNamespaces()(About);