import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const KLeague1Matches = () => {
    return (
        <div>
            <h3>K리그1</h3>
            <ul>
                {/* <li className="roundNum"><Link to={`/main/matches/${k리그테이블값의라운드}`}>k리그테이블값의라운드</Link></li> */}
            </ul>
            <Routes>
                <Route path={"/:id"} />
            </Routes>
        </div>
    );
};

export default KLeague1Matches;