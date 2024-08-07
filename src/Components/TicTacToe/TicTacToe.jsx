import React from 'react'
import './TicTacToe.css'
import Circle from '../Assets/Circle.png'
import X_icon from '../Assets/X-icon.png'

const TicTacToe = () => {
  return (
    <div>
      <div className="container">
        <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row2">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row3">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </div>
  )
}

export default TicTacToe
