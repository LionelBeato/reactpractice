import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

/*  Header class with bootstrap component code.
    Thought: Would it be better to use vanilla bootstrap?
*/

class Head extends React.Component {

    render() {

        return (
            //NavBar properties are similar to bootstrap
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Navbar>)
    }
}


export default Head;