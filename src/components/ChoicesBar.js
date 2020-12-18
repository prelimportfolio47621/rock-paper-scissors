import React from 'react';
import Choice from './Choice.js';
import rockImg from '../images/rock.png';
import paperImg from '../images/paper.png';
import scissorsImg from '../images/scissors.png';

function ChoicesBar({clickChoice}) {
    return (
        <div class="choices">
            <Choice id="r" src={rockImg} alt="Rock hand symbol" clickChoice={clickChoice} />
            <Choice id="p" src={paperImg} alt="Paper hand symbol" clickChoice={clickChoice} />
            <Choice id="s" src={scissorsImg} alt="Scissors hand symbol" clickChoice={clickChoice} />
        </div>
    )
}

export default ChoicesBar;