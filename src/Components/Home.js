
import Container from "react-bootstrap/Container";
import { withNamespaces } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Element } from 'react-scroll'
// CSS
import '../CSS/Home.css';
const Home = () => {    

    return (
        <Element name="homeSection">
        <div className="Home Jumbotron">
        <Container fluid className="homeContainer py-5 text-center">
                    <h1  class="myName display-1">Megumi Yamazaki</h1>
                    <h2 >- Software Developer -</h2>
                    <p className="pt-4">
                        <a href="https://www.linkedin.com/in/megumi-yamazaki-bb823013a/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                        <a href="https://github.com/MegumiYam" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon  className="ms-4" icon={faGithub} size="3x" />
                        </a>
                    </p>
        </Container>
        </div>
        </Element>
    )
}
export default withNamespaces()(Home);