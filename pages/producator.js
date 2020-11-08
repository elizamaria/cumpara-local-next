import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Producator = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Producator - Cumpara local</title>
          <meta property="og:title" content="Producator - Cumpara local" />
        </Head>
        <Header></Header>
        <div className="container01">
          <div className="container02">
            <div className="container03">
              <h1 className="thqHeading1 text">Producator 1</h1>
              <span className="text1">www.google.com</span>
              <div className="divider"></div>
              <div className="container04">
                <svg viewBox="0 0 1024 1024" className="thqIcon icon">
                  <title>truck</title>
                  <path d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"></path>
                </svg>
                <span className="text2">Livrare</span>
              </div>
              <div className="container05">
                <svg viewBox="0 0 1024 1024" className="thqIcon icon1">
                  <title>person_pin_circle</title>
                  <path d="M512 598q44 0 94-27t76-65q0-38-59-63t-111-25-111 25-59 63q60 92 170 92zM512 170q-36 0-61 25t-25 61 25 61 61 25 61-25 25-61-25-61-61-25zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                </svg>
                <span className="text3">Ridicare personalaÂ </span>
              </div>
              <div className="container06">
                <svg viewBox="0 0 1024 1024" className="thqIcon icon2">
                  <title>arrow-up-right</title>
                  <path d="M288 0l256 256-544 544 224 224 544-544 256 255.998v-735.998h-736z"></path>
                </svg>
                <span className="text4">Comanda minima:</span>
                <span className="text5">40 RON</span>
              </div>
              <div className="container07">
                <svg viewBox="0 0 1280 1024" className="thqIcon icon3">
                  <title>price-tags</title>
                  <path d="M1232 0h-384c-26.4 0-63.274 15.274-81.942 33.942l-476.116 476.116c-18.668 18.668-18.668 49.214 0 67.882l412.118 412.118c18.668 18.668 49.214 18.668 67.882 0l476.118-476.118c18.666-18.666 33.94-55.54 33.94-81.94v-384c0-26.4-21.6-48-48-48zM992 384c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                  <path d="M128 544l544-544h-80c-26.4 0-63.274 15.274-81.942 33.942l-476.116 476.116c-18.668 18.668-18.668 49.214 0 67.882l412.118 412.118c18.668 18.668 49.214 18.668 67.882 0l30.058-30.058-416-416z"></path>
                </svg>
                <span className="text6">Interval preturi: 40 RON - 20 RON</span>
              </div>
              <div className="container08">
                <svg viewBox="0 0 1026.2674285714286 1024" className="thqIcon icon4">
                  <title>recycle</title>
                  <path d="M477.714 668l-8.571 210.286-1.143 12.571-240-16.571c-29.714-2.286-54.286-30.286-65.143-55.429-22.857-53.143 6.857-116 24-166.857 0 0 44 6.857 290.857 16zM256.571 333.143l102.857 216.571-84-52.571c-128.571 146.857-140.571 256-140.571 256l-108.571-204c-22.286-33.143-2.286-69.143-2.286-69.143s20-36 65.143-107.429l-80-49.143zM960 628.571l-107.429 205.143c-14.857 37.143-56 40.571-56 40.571s-40.571 4-125.143 6.857l4.571 93.714-131.429-209.714 120.571-206.857 4 98.857c193.714 23.429 290.857-28.571 290.857-28.571zM511.429 100.571c0 0-26.857 35.429-151.429 248.571l-181.143-106.857-10.857-6.857 128.571-203.429c16-25.143 52-34.286 80-31.429 57.143 5.143 98.286 60.571 134.857 100zM885.714 276l121.143 207.429c15.429 25.714 6.286 61.714-8.571 85.714-30.857 48-99.429 59.429-150.857 73.714 0 0-19.429-40.571-151.429-249.143l178.857-111.429zM804 146.857l81.143-47.429-125.714 213.143-239.429-11.429 86.286-49.143c-68.571-182.286-159.429-245.143-159.429-245.143l231.429 0.571c40-3.429 61.714 30.857 61.714 30.857s22.286 34.857 64 108.571z"></path>
                </svg>
                <span className="text7">Ambalaj eco-friendly</span>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1512908593802-fc940f380825?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
            className="thqImage image"
          />
        </div>
        <div className="container09">
          <div className="container10">
            <h1 className="thqHeading1 text8">Exemple de produse</h1>
            <div className="divider1"></div>
            <div className="container11">
              <div className="container12">
                <div className="container13">
                  <div className="container14"></div>
                </div>
                <div className="container15">
                  <div className="container16"></div>
                </div>
              </div>
              <div className="container17">
                <img
                  src="https://images.unsplash.com/photo-1576450606555-79fbc1f94288?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
                  className="thqImage image1"
                />
              </div>
              <div className="container18">
                <img
                  src="https://images.unsplash.com/photo-1602485178045-7d7159575b1a?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
                  className="thqImage image2"
                />
                <img
                  src="https://images.unsplash.com/photo-1480717846107-87837abec1e9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image3"
                />
              </div>
              <div className="container19">
                <img
                  src="https://images.unsplash.com/photo-1594631249071-c6a54828b0eb?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image4"
                />
              </div>
              <div className="container20">
                <img
                  src="https://images.unsplash.com/photo-1510828325835-5940110b482a?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
                  className="thqImage image5"
                />
                <img
                  src="https://images.unsplash.com/photo-1513885045260-6b3086b24c17?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image6"
                />
              </div>
              <div className="container21">
                <img
                  src="https://images.unsplash.com/photo-1557308917-ef00c7059bfd?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image7"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            font-family: Spectral;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container01 {
            width: 100%;
            height: 614px;
            display: flex;
            padding: 0;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container02 {
            color: #5c3030;
            display: flex;
            align-items: flex-start;
            padding-top: 200px;
            padding-left: 100px;
            flex-direction: column;
            padding-bottom: 200px;
          }
          .container03 {
            width: 454px;
            display: flex;
            padding: 50px;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(41, 114, 114, 0.2);
          }
          .text {
            color: #5c3030;
            font-size: 3.5em;
          }
          .text1 {
            color: #5c3030;
            font-size: 1.5em;
          }
          .divider {
            width: 50%;
            height: 2px;
            display: flex;
            align-self: flex-start;
            margin-top: 20px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #c93e4f;
          }
          .container04 {
            display: flex;
            margin-top: 25px;
            flex-direction: row;
          }
          .icon {
            fill: #5c3030;
            width: 24px;
            height: 24px;
          }
          .text2 {
            color: #5c3030;
            margin-left: 20px;
          }
          .container05 {
            display: flex;
            margin-top: 25px;
            flex-direction: row;
          }
          .icon1 {
            fill: #5c3030;
            width: 24px;
            height: 24px;
          }
          .text3 {
            color: #5c3030;
            margin-left: 20px;
            text-decoration: line-through;
          }
          .container06 {
            display: flex;
            margin-top: 25px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .icon2 {
            fill: #5c3030;
            width: 24px;
            height: 24px;
          }
          .text4 {
            color: #5c3030;
            margin-left: 20px;
          }
          .text5 {
            color: #5c3030;
            font-weight: 600;
            margin-left: 20px;
          }
          .container07 {
            display: flex;
            margin-top: 25px;
            flex-direction: row;
          }
          .icon3 {
            fill: #5c3030;
            width: 24px;
            height: 24px;
          }
          .text6 {
            color: #5c3030;
            margin-left: 20px;
          }
          .container08 {
            display: flex;
            margin-top: 25px;
            flex-direction: row;
          }
          .icon4 {
            fill: #5c3030;
            width: 24px;
            height: 24px;
          }
          .text7 {
            color: #5c3030;
            margin-left: 20px;
          }
          .image {
            width: 50%;
            height: 618px;
            align-self: center;
            object-fit: cover;
          }
          .container09 {
            width: 95%;
            display: flex;
            padding: 100px;
            flex-wrap: wrap;
            margin-top: -20px;
            align-items: center;
            border-color: rgba(41, 114, 114, 0.9);
            flex-direction: row;
            justify-content: flex-start;
            background-color: #EFF2F1;
            border-top-width: 7px;
          }
          .container10 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #EFF2F1;
          }
          .text8 {
            color: #5c3030;
            font-size: 2.5em;
          }
          .divider1 {
            width: 50%;
            height: 2px;
            margin: 20px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #c93e4f;
          }
          .container11 {
            width: 100%;
            display: grid;
            grid-gap: 20px;
            flex-wrap: wrap;
            max-width: 900px;
            align-items: center;
            padding-top: 50px;
            flex-direction: row;
            justify-content: flex-start;
            grid-template-rows: 2;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .container12 {
            width: 300px;
            height: 520px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container13 {
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            background-size: cover;
            justify-content: center;
            background-color: rgba(120, 120, 120, 0.4);
            background-image: url('https://images.unsplash.com/photo-1514275672899-1ff6d9a25fe0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkxMzIxfQ&w=1100');
            background-position: center;
          }
          .container14 {
            width: 95%;
            height: 95%;
            display: flex;
            align-items: center;
            border-color: rgba(255, 235, 234, 0.46);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .container15 {
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1567224575166-d18db7c1f62b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1100&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ');
            background-position: center;
          }
          .container16 {
            width: 95%;
            height: 95%;
            display: flex;
            align-items: center;
            border-color: rgba(255, 235, 234, 0.46);
            border-width: 1px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
          }
          .container17 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(120, 120, 120, 0.4);
          }
          .image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .container18 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image2 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            padding-bottom: 20px;
          }
          .image3 {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .container19 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(120, 120, 120, 0.4);
          }
          .image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .container20 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image5 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            padding-bottom: 20px;
          }
          .image6 {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .container21 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(120, 120, 120, 0.4);
          }
          .image7 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default Producator
