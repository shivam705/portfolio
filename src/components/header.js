import React from 'react';
import './Comp.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header>
            <div className="App">
                <div>
                    <p>
                        Learn React
                    </p> 
                </div>
                <Link to='/'><Button  variant="outline-primary" color='light'>About</Button></Link>
                <Link to='/experience'><Button variant="outline-primary">Experience</Button></Link>
                <Link to='/work'><Button variant="outline-primary">Work</Button></Link>
                <Link to='/contact'><Button variant="outline-primary">Contact</Button></Link>
                <Link to='/resume'><Button variant="outline-primary">Resume</Button></Link>
                
            </div>
        </header>
    )
}