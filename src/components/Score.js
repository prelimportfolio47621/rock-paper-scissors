import React from 'react';

function Score({player, score}) {
    return (
        <div class="score-box" id={player + "-score"}>
            <p class="badge">{player}</p>
            <p class="score">{score}</p>
        </div>
    )
}

export default Score;