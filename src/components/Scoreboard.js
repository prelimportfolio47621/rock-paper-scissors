import React from 'react';
import Score from './Score';

function Scoreboard({userSc, compSc}) {
    return (
        <div class="score-board">
            <Score player="user" score={userSc} />
            <div class="horiz-line"></div>
            <Score player="comp" score={compSc} />
        </div>
    )
}

export default Scoreboard;