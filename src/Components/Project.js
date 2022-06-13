import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import i18n from '../i18n';
import { Element } from 'react-scroll'
import { withNamespaces } from 'react-i18next';
// Image
import PortfolioImg from "../Assets/Img/portfolio.png";
import HappyBiddingImg from "../Assets/Img/happybidding.png";
import WeatherAppImg from "../Assets/Img/weatherapp.png";
import CalAppImg from "../Assets/Img/calculator.png";

import "../CSS/Project.css"
const Project= () => {    

    return (
        <Element name="projectSection">
        <div className="Project">
        <Container className="text-center py-4">
            <h1>My Recent Project</h1>
            <Row className="pt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={PortfolioImg} />
                        <Card.Body>
                            <Card.Title>Portfolio</Card.Title>
                            <Card.Text>
                                {i18n.t('Project_1')}
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={WeatherAppImg} />
                        <Card.Body>
                            <Card.Title>Weather Application</Card.Title>
                            <Card.Text>
                                {i18n.t('Project_2')}                          
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={HappyBiddingImg} />
                        <Card.Body>
                            <Card.Title>Happy Bidding</Card.Title>
                            <Card.Text>
                                {i18n.t('Project_3')}                              
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row>
            <Row className="pt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CalAppImg} />
                        <Card.Body>
                            <Card.Title>Calculator</Card.Title>
                            <Card.Text>
                                {i18n.t('Project_4')}
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row>
        </Container>

        </div>
        </Element>
    )
}
export default withNamespaces()(Project);