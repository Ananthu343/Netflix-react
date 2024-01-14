import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div> 
      <Main />
      <Row rowId = '1' title="Up Coming" fetchUrl = {requests.requestUpcoming}/>
      <Row rowId = '2' title="Popular" fetchUrl = {requests.requestPopular}/>
      <Row rowId = '3' title="Trending" fetchUrl = {requests.requestTrending}/>
      <Row rowId = '4' title="Top Rated" fetchUrl = {requests.requestToprated}/>
      <Row rowId = '5' title="Tv Shows" fetchUrl = {requests.requestTvShows}/>

    </div>
  )
}

export default Home
