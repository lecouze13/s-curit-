import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const location = useLocation();
  const path = location.pathname.substring(1);

  let brandStyle1 = {}; 
  let brandStyle2 = {}; 
  let brandStyle3 = {}; 
  let brandStyle4 = {};
 


if (path === "Compte") {
    brandStyle1 = { color: "white", fontStyle: "bold" }; // Style pour Compte
  } else if (path === "Annuaire") {
    brandStyle2 = { color: "white", textDecoration: "bold" }; // Style pour Annuaire
  } else if (path === "connexion") {
    brandStyle3 = { color: "white", fontWeight: "bold" }; // Style pour connexion
  }
  else
  {
    brandStyle4={color:"white",ontWeight: "bold"}
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"style={brandStyle4}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/Compte"style={brandStyle1}>Compte</Nav.Link>
            <Nav.Link as={Link} to="/Annuaire"style={brandStyle2}> Annuaire</Nav.Link>
            <Nav.Link as={Link} to="/connexion"style={brandStyle3}>Déconnexion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;