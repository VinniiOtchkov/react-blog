import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Icon} from 'react-materialize';
import { withRouter } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
let goHome = (e) => {
    e.preventDefault();
    console.log(props)
  }
        return (
            <div>
                <Navbar brand="Dauntless" onClick={(e)=> e.preventDefault()} right>
                    <NavItem title="Home" onClick={(e) => goHome(e)}><NavLink activeStyle={{color: '#7A7265'}} exact to="/"><Icon>home</Icon></NavLink></NavItem>
                    <NavItem title="Add Post"><NavLink activeStyle={{color: '#7A7265'}} exact to="/post/new"><Icon>add</Icon></NavLink></NavItem>
                </Navbar>

            </div>
        )
}

export default withRouter(Nav);
