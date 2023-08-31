import React from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Lists from '../Lists/Lists'

import "./Home.css"
import CompletedList from '../CompletedList/CompletedList'

function Home() {
  return (
    <>
      <section id="home">
        <Header />
        <div className="wrapper">
          <Form />
          <div className="head">
            <h3>My List</h3>
          </div>
          <Lists />
          
         <CompletedList />
        </div>
      </section>
    </>
  )
}

export default Home