import React from 'react';
import {Link} from '@reach/router';


const Navbar = (props) => {

    return(
        <div>
        <Link to ={"/"}>Teams</Link> 
        |
        <Link to ={"/player/status"}> Player Status</Link>
        
    
        </div>
    )
}

export default Navbar;


// teams with the color they are on
// roster of the players
