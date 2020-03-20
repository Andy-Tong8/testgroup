import React from 'react'
import {Link} from '@reach/router';
const Header = (props) => {
    return (
        <div>
            <h2>you are in header jsx</h2>
            <Link style={{margin:'5px'}} to="/players/list">Manage Players</Link> |&nbsp;
            <Link style={{margin:'5px'}} to="/status/game/1">Manage Player Status</Link>
        </div>
    )
}

export default Header