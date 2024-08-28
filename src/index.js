import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBishop, faChessKnight, faChessQueen, faChessRook,} from '@fortawesome/free-solid-svg-icons';

import { faChessKing } from '@fortawesome/free-solid-svg-icons';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';

function Main () {
  return(

    <div class="section">
    <div class="container">
      <h1>Chess Board</h1>

      <div class="row">
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessRook} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessKnight} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessBishop} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessQueen} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessKing} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessBishop} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessKnight} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessRook} /></div>
      </div>

      <div class="row">
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon icon={faChessPawn}/></div>
      </div>

      <div class="row">
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
      </div>

      <div class="row">
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
      </div>


      <div class="row">
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
      </div>

      <div class="row">
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
        <div class="col-1" id="black"></div>
        <div class="col-1" id="white"></div>
      </div>

      <div class="row">
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessPawn}/></div>
      </div>


      <div class="row">
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessKnight} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessRook} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessQueen} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessBishop} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessBishop} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessKing} /></div>
        <div class="col-1" id="black"><FontAwesomeIcon id="whiteIcon" icon={faChessRook} /></div>
        <div class="col-1" id="white"><FontAwesomeIcon id="whiteIcon" icon={faChessKnight} /></div>
      </div>


      

    </div>
  </div>
);

}


ReactDOM.render(<Main/>,document.getElementById('root'));
