import React, {useEffect} from 'react'
import {Router, navigate, Link} from '@reach/router';
import Dashboard from './Dashboard'
import Form from './Form'


const PlayerHeader = (props) => {
    return (
        <div>
            <h4>you are in playerheader.jsx</h4>
            <Link style={{margin:'5px'}} to="/players/list">List</Link> |&nbsp;
            <Link style={{margin:'5px'}} to="/players/addplayer">Add Player</Link>

        </div>
    )
}

export default PlayerHeader