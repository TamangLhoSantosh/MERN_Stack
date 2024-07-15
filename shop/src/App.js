import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import CounterParent from "./components/Counter/Counter";
import MessageParent from "./components/Message/Message";
import ToggleParent from "./components/Toogle/Toogle";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import Shop from "./components/Shop";
import Functional from "./components/FunctionalComponent/Functional";
import ParentComponent from "./components/ParentComponent/ParentComponent";

function App() {
  const data = [
    {
      imageUrl:
        "https://archive.org/download/placeholder-image/placeholder-image.jpg",
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusamus accusantium rem! Atque quidem similique, vitae doloribus",
    },
    {
      imageUrl:
        "https://archive.org/download/placeholder-image/placeholder-image.jpg",
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusamus accusantium rem! Atque quidem similique, vitae doloribus",
    },
    {
      imageUrl:
        "https://archive.org/download/placeholder-image/placeholder-image.jpg",
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusamus accusantium rem! Atque quidem similique, vitae doloribus",
    },
    {
      imageUrl:
        "https://archive.org/download/placeholder-image/placeholder-image.jpg",
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusamus accusantium rem! Atque quidem similique, vitae doloribus",
    },
    {
      imageUrl:
        "https://archive.org/download/placeholder-image/placeholder-image.jpg",
      title: "Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusamus accusantium rem! Atque quidem similique, vitae doloribus",
    },
  ];

  const message = "Hello from App.js";

  return (
    <div className="container mx-auto mt-10">
      {/* <Card data={data} /> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <CounterParent />
          <MessageParent />
          <ToggleParent />
        </Routes>
      </BrowserRouter>  */}
      <Functional />
      <ParentComponent message={message} />
    </div>
  );
}

export default App;
