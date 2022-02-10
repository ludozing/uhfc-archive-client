import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import KLeague1Matches from './KLeague1Matches';
import ACLMatches from './ACLMatches';
import FACupMatches from './FACupMatches';

let filter = {
    isKL1: false,
    isACL: false,
    isFAC: false
}
console.log(filter.isKL1)
function onClick(props){
    return(
        filter = {    
            isKL1: false,
            isACL: false,
            isFAC: false
        }
        // filter.props = true
    )
}

function MatchesPage(props) {
    return (
        <div className='matchesPage contentArea'>
            <h2 className='contentTitle'>MATCH RESULTS</h2>
            <ul className='matchPageMenu subMenu'>
                <li><Link to={"/main/matches/kleague1"} onClick={onClick("isKL1")}>K리그1</Link></li>
                <li><Link to={"/main/matches/acl"}>ACL</Link></li>
                <li><Link to={"/main/matches/facup"}>FA컵</Link></li>
            </ul>
            <Routes>
                <Route path={"/kleague1/*"} element={<KLeague1Matches/>}/>
                <Route path={"/acl"} element={<ACLMatches/>}/>
                <Route path={"/facup"} element={<FACupMatches/>}/>
            </Routes>
        </div>
    );
}

export default MatchesPage;