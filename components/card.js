import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className="container">
        <img src={props.src} className="thqImage image" />
        <span className="text">{props.decoratiuni}</span>
        <div className="divider"></div>
        <button className="thqButton button">CAUTA</button>
      </div>
      <style jsx>
        {`
          .container {
            width: 200px;
            display: flex;
            overflow: auto;
            align-items: center;
            flex-direction: column;
          }
          .image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .text {
            color: #297272;
            font-size: 24px;
            font-style: italic;
            font-family: Spectral;
            font-weight: 600;
            padding-top: 25px;
          }
          .divider {
            width: 50%;
            height: 2px;
            margin: 10px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #c93e4f;
          }
          .button {
            color: #297272;
            font-size: 14px;
            margin-top: 10px;
            font-weight: 600;
            margin-left: 25px;
            padding-top: 6px;
            border-color: #297272;
            border-width: 1px;
            margin-right: 25px;
            padding-left: 8px;
            border-radius: 4px;
            margin-bottom: 25px;
            padding-right: 12px;
            padding-bottom: 6px;
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  decoratiuni: 'Decoratiuni',
}

Card.propTypes = {
  src: PropTypes.string,
  decoratiuni: PropTypes.string,
}

export default Card
