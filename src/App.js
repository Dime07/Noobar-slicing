import './App.css';
import Navbar from './Component/navbar';
import Hero from './Component/hero';
import Card from './Component/Card';
import Footer from './Component/Footer';
import "./CSS/App.css";
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  //data
  const [Series] = useState([
    {
      judul : "Friends",
      url : "/assets/series/friends.jpg",
      rating : 5,
      cat1 : "Comedy",
      cat2 : "Romance",
      cat3 : ""
    },
    {
      judul : "Arrow",
      url : "/assets/series/arrow.jpg",
      rating : 4.5,
      cat1 : "Action",
      cat2 : "Adeventure",
      cat3 : "Crime"
    },
    {
      judul : "Stranger Things",
      url : "/assets/series/strangerthing3.jpg",
      rating : 4,
      cat1 : "Drama",
      cat2 : "Fantasy",
      cat3 : "Horror"
    },
    {
      judul : "Supergirl",
      url : "/assets/series/supergirl.jpg",
      rating : 4,
      cat1 : "Action",
      cat2 : "Adventure",
      cat3 : "Drama"
    },
  ]);
  const [Film] = useState([
    {
      judul : "Hotel Transylvania 4",
      url : "/assets/HT4.jpg",
      rating : 4,
      cat1 : "Animation",
      cat2 : "Adventure",
      cat3 : "Comedy"
    },
    {
      judul : "Tenet",
      url : "/assets/Tenet.jpg",
      rating : 4.5,
      cat1 : "Action",
      cat2 : "Sci-Fi",
      cat3 : "Thriller"
    },
    {
      judul : "Extraction",
      url : "/assets/Extraction.jpg",
      rating : 3,
      cat1 : "Action",
      cat2 : "Thriller",
      cat3 : ""
    },
    {
      judul : "Onward",
      url : "/assets/Onward.jpg",
      rating : 3.5,
      cat1 : "Animation",
      cat2 : "Adventure",
      cat3 : "Comedy"
    },
    {
      judul : "Scoob!",
      url : "/assets/Scoob.jpg",
      rating : 4,
      cat1 : "Animation",
      cat2 : "Adventure",
      cat3 : "Comedy"
    },
    {
      judul : "Soul",
      url : "/assets/Soul.jpeg",
      rating : 4.5,
      cat1 : "Animation",
      cat2 : "Adventure",
      cat3 : ""
    }
  ]);
  return (
    <div className="noobar">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Hero />
            <div className="quotes">
                <p>
                  Don't forget to prepare a snack before watching
                </p>
            </div>
            <Card data={Film}/>
          </Route>

          <Route path="/movies">
            <h2 className="header">Movies 2023</h2>
            <Card data={Film}/>
          </Route>

          <Route path="/series">
            <h2 className="header">TV Series 2030</h2>
            <Card data={Series}/>
          </Route>

        </Switch>

        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
