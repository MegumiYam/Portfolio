import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { Navbar, Nav,  NavDropdown } from 'react-bootstrap';
import {Link} from 'react-scroll';

const Header = () => {    

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <>
        <Navbar className="fixed-top bg-transparent text-dark" collapseOnSelect expand="lg"  >
            <Navbar.Brand className="ms-4"><Link to="homeSection" smooth={true} duration={500}>Megumi Yamazaki</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="aboutSection" smooth={true} duration={500}>About</Link></Nav.Link>
                    <Nav.Link><Link to="projectSection" smooth={true} duration={500}>Project</Link></Nav.Link>
                    <Nav.Link><Link to="contactSection" smooth={true} duration={500}>Contact</Link></Nav.Link>
                    
                    <NavDropdown title="Language" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('ja')}>Japanese</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        </>
    )
}
export default  withNamespaces()(Header);