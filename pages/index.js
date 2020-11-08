import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Card from '../components/card'
import Footer21 from '../components/footer21'

const Page = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Cumpara local</title>
          <meta property="og:title" content="Cumpara local" />
        </Head>
        <Header></Header>
        <div className="container01">
          <div className="container02">
            <h1 className="thqHeading1 text">Descopera cadouri</h1>
            <h1 className="thqHeading1 text01">made in Cluj</h1>
            <h2 className="thqHeading2 text02">
              Anul acesta ne propunem sa incurajam oferirea de cadouri de Craciun realizate local.
            </h2>
            <h2 className="thqHeading2 text03">
              Exploreaza lista noastra de producatorii locali, iar daca esti producator, da-ne de
              veste
            </h2>
            <div className="divider"></div>
            <button className="thqButton button">CADOURI</button>
          </div>
        </div>
        <div id="categorii" className="container03">
          <h1 className="thqHeading1 text04">Categorii de cadouri</h1>
          <div className="divider1"></div>
          <div className="container04">
            <Link href="/categorie">
              <a>
                <Card
                  src="https://images.unsplash.com/photo-1543652437-1c165dbfb282?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
                  className="thqLink"
                ></Card>
              </a>
            </Link>
            <Link href="/producator">
              <a>
                <Card
                  src="https://images.unsplash.com/photo-1547275870-de097f0cea8f?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
                  decoratiuni="Haine"
                  className="thqLink"
                ></Card>
              </a>
            </Link>
            <Card
              src="https://images.unsplash.com/photo-1511795617213-5dda68cf4d19?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Lumanari"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1575129122214-05d16114b0fd?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Mancaruri"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1512389180939-34b58175adff?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Portofele"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1544202272-d1b1feb21070?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Pentru casa"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1513885251266-04dcfa26e979?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Bucatarie"
            ></Card>
            <Card src="https://images.unsplash.com/photo-1513861810402-53342bf5bd13?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"></Card>
          </div>
        </div>
        <div id="vouchere" className="container05">
          <div className="container06">
            <h1 className="thqHeading1 text05">Vouchere</h1>
            <h2 className="thqHeading2 text06">Cauti sa oferi vouchere cadou?Â Â </h2>
            <h3 className="thqHeading3">Poti alege dintre producatorii care oferaÂ </h3>
            <div className="divider2"></div>
            <button className="thqButton button1">EXPLOREAZA</button>
          </div>
        </div>
        <div className="container07">
          <div className="container08">
            <h1 className="thqHeading1 text08">IDEI DE CADOURI</h1>
            <div className="divider3"></div>
            <div className="container09">
              <div className="container10">
                <div className="container11">
                  <div className="container12"></div>
                </div>
                <div className="container13">
                  <div className="container14"></div>
                </div>
              </div>
              <div className="container15">
                <img
                  src="https://images.unsplash.com/photo-1576450606555-79fbc1f94288?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
                  className="thqImage image"
                />
              </div>
              <div className="container16">
                <img
                  src="https://images.unsplash.com/photo-1602485178045-7d7159575b1a?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
                  className="thqImage image1"
                />
                <img
                  src="https://images.unsplash.com/photo-1480717846107-87837abec1e9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image2"
                />
              </div>
              <div className="container17">
                <img
                  src="https://images.unsplash.com/photo-1594631249071-c6a54828b0eb?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image3"
                />
              </div>
              <div className="container18">
                <img
                  src="https://images.unsplash.com/photo-1510828325835-5940110b482a?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;w=1100"
                  className="thqImage image4"
                />
                <img
                  src="https://images.unsplash.com/photo-1513885045260-6b3086b24c17?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image5"
                />
              </div>
              <div className="container19">
                <img
                  src="https://images.unsplash.com/photo-1557308917-ef00c7059bfd?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1100"
                  className="thqImage image6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container20">
          <h1 className="thqHeading1 text09">
            Esti producator si vrei sa dai de veste ca ai cadouri faine?Â 
          </h1>
          <h3 className="thqHeading3 text10">Â Serviciul este gratuit.</h3>
          <button className="thqButton button2">CONTACTEAZA-NE</button>
        </div>
        <Footer21></Footer21>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            font-family: Spectral;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
          }
          .container01 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-start;
            padding-top: 200px;
            padding-left: 100px;
            padding-right: 100px;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            justify-content: flex-start;
            background-color: rgba(120, 120, 120, 0.4);
            background-image: url('https://images.unsplash.com/photo-1510284876186-b1a84b94418f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=1200&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ');
            background-repeat: inherit;
            background-position: left;
          }
          .container02 {
            display: flex;
            flex-wrap: nowrap;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text {
            color: #5c3030;
            font-size: 4em;
            align-self: center;
            text-align: center;
            font-family: Spectral;
            line-height: 1.3;
          }
          .text01 {
            color: #5c3030;
            font-size: 6em;
            align-self: center;
            text-align: center;
            font-family: Spectral;
            line-height: 1.3;
            margin-bottom: 30px;
          }
          .text02 {
            color: #1d1c1b;
            width: 588px;
            align-self: center;
            text-align: center;
          }
          .text03 {
            color: #1d1c1b;
            width: 600px;
            align-self: center;
            margin-top: 20px;
            text-align: center;
          }
          .divider {
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
          .button {
            color: #c93e4f;
            margin: 25px;
            font-size: 24px;
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
          .container03 {
            width: 95%;
            display: flex;
            padding: 50px;
            flex-wrap: nowrap;
            margin-top: -40px;
            align-items: center;
            border-color: rgba(41, 114, 114, 0.9);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #EFF2F1;
            border-top-width: 7px;
          }
          .text04 {
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
          .container04 {
            width: 100%;
            display: grid;
            grid-gap: 20px;
            flex-wrap: wrap;
            max-width: 1000px;
            align-items: center;
            padding-top: 100px;
            padding-left: 0;
            justify-items: center;
            padding-right: 0;
            flex-direction: row;
            padding-bottom: 50px;
            justify-content: flex-start;
            grid-template-rows: 2;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .container05 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding-top: 100px;
            padding-left: 100px;
            padding-right: 50px;
            flex-direction: column;
            padding-bottom: 100px;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('https://images.unsplash.com/photo-1512284386138-e4afa2348a9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=1200&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ');
            background-position: center;
          }
          .container06 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-left: 200px;
            flex-direction: column;
            justify-content: center;
          }
          .text05 {
            font-size: 2.5em;
            align-self: center;
          }
          .text06 {
            align-self: center;
          }
          .divider2 {
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
          .button1 {
            color: #c93e4f;
            margin: 25px;
            font-size: 20px;
            align-self: center;
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
          .container07 {
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
          .container08 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #EFF2F1;
          }
          .text08 {
            color: #5c3030;
            font-size: 2.5em;
          }
          .divider3 {
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
          .container09 {
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
          .container10 {
            width: 300px;
            height: 520px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container11 {
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
          .container12 {
            width: 95%;
            height: 95%;
            display: flex;
            align-items: center;
            border-color: rgba(255, 235, 234, 0.46);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .container13 {
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
          .container14 {
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
          .container15 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(120, 120, 120, 0.4);
          }
          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .container16 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image1 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            padding-bottom: 20px;
          }
          .image2 {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .container17 {
            width: 300px;
            height: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(120, 120, 120, 0.4);
          }
          .image3 {
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
          .image4 {
            width: 100%;
            height: 250px;
            object-fit: cover;
            padding-bottom: 20px;
          }
          .image5 {
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
          .image6 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .container20 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding-top: 50px;
            padding-left: 100px;
            padding-right: 100px;
            flex-direction: column;
            padding-bottom: 50px;
            justify-content: center;
          }
          .text09 {
            color: #5c3030;
            width: 70%;
            max-width: 700px;
            text-align: center;
          }
          .text10 {
            color: #5c3030;
            width: 70%;
            max-width: 700px;
            text-align: center;
          }
          .button2 {
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

export default Page
