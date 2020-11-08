import React from 'react'

const Footer21 = () => {
  return (
    <>
      <div className="container">
        <div className="container1">
          <div className="container2">
            <img src="/playground_assets/logo%202-1200h.png" className="thqImage image" />
            <span className="text">Copyright Â© 2020.</span>
          </div>
          <div className="container3">
            <span className="text1">Designed with local developed tools:</span>
            <img src="/playground_assets/Teleport_Logo-v2_4.svg" className="thqImage image1" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            padding: 100px;
            overflow: auto;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #5c3030;
          }
          .container1 {
            width: 100%;
            display: flex;
            max-width: 900px;
            flex-direction: row;
            justify-content: space-between;
          }
          .container2 {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
          }
          .image {
            width: 300px;
            object-fit: cover;
          }
          .text {
            color: #ffffff;
            margin-top: 20px;
          }
          .container3 {
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .text1 {
            color: #ffffff;
          }
          .image1 {
            width: 150px;
            margin-top: 20px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default Footer21
