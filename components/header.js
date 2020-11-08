import React from 'react'

const Header = () => {
  return (
    <>
      <div className="container">
        <img src="/playground_assets/logo-1100h.png" className="thqImage image" />
        <div className="container1">
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="thqLink text"
          >
            CADOURI
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="thqLink text1"
          >
            VOUCHERE
          </a>
          <button className="thqButton button">SUNT PRODUCATOR</button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 30px;
            padding-left: 100px;
            padding-right: 100px;
            flex-direction: row;
            padding-bottom: 30px;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .image {
            height: 80px;
            object-fit: cover;
          }
          .container1 {
            height: 100px;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .text {
            color: #c93e4f;
            font-weight: 600;
            margin-right: 25px;
            text-decoration: none;
          }
          .text1 {
            color: #c93e4f;
            font-weight: 600;
            text-decoration: none;
          }
          .button {
            color: #c93e4f;
            margin: 25px;
            font-size: 16px;
            font-weight: 600;
            padding-top: 8px;
            border-color: #c93e4f;
            border-width: 2px;
            padding-left: 16px;
            border-radius: 4px;
            padding-right: 16px;
            padding-bottom: 8px;
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}

export default Header
