import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const HardSkills= () => {    

    return (
        <>
        <Container className="text-start">
            <Row className="pb-2">
                <Col md={{span:4, offset:2}} xs={{span:5, offset:1}}>
                    <h4>Java</h4>
                    <ProgressBar animated now={80} />
                </Col>
                <Col md={{span:4, offset:1}}  xs={{span:5, offset:1}}>
                    <h4>C++</h4>
                    <ProgressBar animated now={75} />
                </Col>
            </Row>
            <Row className="pb-2">
                <Col md={{span:4, offset:2}} xs={{span:5, offset:1}}>
                    <h4>C#</h4>
                    <ProgressBar animated now={70} />
                </Col>
                <Col md={{span:4, offset:1}}  xs={{span:5, offset:1}}>
                    <h4>JavaScript</h4>
                    <ProgressBar animated now={65} />
                </Col>
            </Row>
            
            <Row className="pb-2">
                <Col md={{span:4, offset:2}}  xs={{span:5, offset:1}}>
                    <h4>React.js</h4>
                    <ProgressBar animated now={65} />
                </Col>
                <Col md={{span:4, offset:1}}  xs={{span:5, offset:1}}>
                    <h4>HTML/CSS</h4>
                    <ProgressBar animated now={90} />
                </Col>
            </Row>        
            <Row className="pb-2">
                <Col md={{span:4, offset:2}} xs={{span:5, offset:1}}>
                    <h4>SQL</h4>
                    <ProgressBar animated now={75} />
                </Col>
                <Col md={{span:4, offset:1}} xs={{span:5, offset:1}}>
                    <h4>RDBMS</h4>
                    <ProgressBar animated now={80} />
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default HardSkills;