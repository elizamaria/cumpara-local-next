import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'

const Categorie = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Categorie - Cumpara local</title>
          <meta property="og:title" content="Categorie - Cumpara local" />
        </Head>
        <Header></Header>
        <div className="container1">
          <div className="container2">
            <h1 className="thqHeading1 text">Decoratiuni</h1>
            <h3 className="thqHeading3 text1">
              In aceasta categorie veti gasi toti producatorii deÂ  decoratiuni
            </h3>
            <div className="divider"></div>
          </div>
        </div>
        <div className="container3">
          <h1 className="thqHeading1 text2">Producatori</h1>
          <div className="divider1"></div>
          <div className="container4">
            <Card decoratiuni="Producator 1"></Card>
            <Link href="/producator">
              <a>
                <Card
                  src="https://images.unsplash.com/photo-1547275870-de097f0cea8f?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
                  decoratiuni="Producator 2"
                  className="thqLink"
                ></Card>
              </a>
            </Link>
            <Card
              src="https://images.unsplash.com/photo-1511795617213-5dda68cf4d19?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Producator 3"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1575129122214-05d16114b0fd?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Producator 4"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1512389180939-34b58175adff?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Producator 4"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1544202272-d1b1feb21070?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Producator 6"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1513885251266-04dcfa26e979?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Producator 7"
            ></Card>
            <Card
              src="https://images.unsplash.com/photo-1513861810402-53342bf5bd13?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjkxMzIxfQ&amp;h=1200"
              decoratiuni="Producator 8"
            ></Card>
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
            flex-direction: column;
            justify-content: flex-start;
          }
          .container1 {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-start;
            padding-top: 100px;
            padding-left: 100px;
            padding-right: 100px;
            flex-direction: column;
            padding-bottom: 100px;
            background-size: cover;
            justify-content: flex-start;
            background-color: rgba(120, 120, 120, 0.4);
            background-image: url('https://images.unsplash.com/photo-1510284876186-b1a84b94418f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=1200&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ');
            background-repeat: inherit;
            background-position: left;
          }
          .container2 {
            width: 483px;
            display: flex;
            flex-wrap: nowrap;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text {
            color: #5c3030;
            width: 388px;
            font-size: 3em;
            align-self: center;
            text-align: center;
          }
          .text1 {
            color: #5c3030;
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
          .container3 {
            width: 95%;
            display: flex;
            padding: 50px;
            flex-wrap: nowrap;
            margin-top: -40px;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #EFF2F1;
          }
          .text2 {
            font-size: 2.5em;
          }
          .divider1 {
            width: 30%;
            height: 2px;
            margin: 20px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #c93e4f;
          }
          .container4 {
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
            padding-bottom: 100px;
            justify-content: flex-start;
            grid-template-rows: 2;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        `}
      </style>
    </>
  )
}

export default Categorie
