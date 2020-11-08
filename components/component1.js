import React from 'react'

const Component1 = () => {
  return (
    <>
      <div className="container">
        <div className="container1">
          <h1 className="thqHeading1 text">Cumpara cadouri locale</h1>
          <h2 className="thqHeading2 text1">
            Anul acesta ne propunem sa oferim variante de cadouri realizate local
          </h2>
        </div>
        <div className="divider"></div>
        <button className="thqButton button">EXPLOREAZA</button>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: nowrap;
            align-items: center;
            padding-top: 200px;
            padding-left: 100px;
            padding-right: 100px;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            justify-content: flex-start;
            background-color: rgba(120, 120, 120, 0.4);
            background-image: url('https://images.unsplash.com/photo-1510284876186-b1a84b94418f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=1200&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ');
            background-repeat: no-repeat;
          }
          .container1 {
            width: 730px;
            height: 280px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: rgba(41, 114, 114, 0.4);
          }
          .text {
            color: #ffffff;
            font-size: 4em;
            font-family: Spectral;
          }
          .text1 {
            color: #1d1c1b;
            width: 50%;
            align-self: center;
            text-align: center;
          }
          .divider {
            width: 50%;
            height: 2px;
            margin: 20px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #c93e4f;
          }
          .button {
            color: #e4d4d4;
            margin: 25px;
            padding: 10px;
            font-size: 24px;
            border-width: 0;
            border-radius: 4px;
            background-color: #C93E4F;
          }
        `}
      </style>
    </>
  )
}

export default Component1
