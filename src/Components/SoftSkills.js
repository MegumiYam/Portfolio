import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

const SoftSkills= () => {    

    return (
        <>
        <Container className="text-start">
            <Row className="pb-2">
                <Col md={{span:4, offset:2}} xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_1')}</h4>
                    <ProgressBar animated now={85} />
                </Col>
                <Col md={{span:4, offset:1}}  xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_2')}</h4>
                    <ProgressBar animated now={90} />
                </Col>
            </Row>
            <Row className="pb-2">
                <Col md={{span:4, offset:2}} xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_3')}</h4>
                    <ProgressBar animated now={70} />
                </Col>
                <Col md={{span:4, offset:1}}  xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_4')}</h4>
                    <ProgressBar animated now={85} />
                </Col>
            </Row>
            
            <Row className="pb-2">
                <Col md={{span:4, offset:2}}  xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_5')}</h4>
                    <ProgressBar animated now={70} />
                </Col>
                <Col md={{span:4, offset:1}}  xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_6')}</h4>
                    <ProgressBar animated now={75} />
                </Col>
            </Row>        
            <Row className="pb-2">
                <Col md={{span:4, offset:2}} xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_7')}</h4>
                    <ProgressBar animated now={85} />
                </Col>
                <Col md={{span:4, offset:1}} xs={{span:5, offset:1}}>
                    <h4>{i18n.t('SoftSkill_8')}</h4>
                    <ProgressBar animated now={70} />
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default withNamespaces()(SoftSkills);