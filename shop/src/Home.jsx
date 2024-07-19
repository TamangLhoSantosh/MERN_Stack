import React from "react";
import CounterParent from "./components/Counter/Counter";
import MessageParent from "./components/Message/Message";
import ToggleParent from "./components/Toogle/Toogle";
import Card from "./components/Card/Card";
import Functional from "./components/FunctionalComponent/Functional";
import ParentComponent from "./components/ParentComponent/ParentComponent";
import ToDoApp from "./components/ToDo/ToDoApp.tsx";
import LifeCycleComponent from "./components/LifeCycleComponent/LifeCycleComponent.jsx";
import EventRegistration from "./components/EventRegistration.jsx";

const Home = () => {
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

  rexxturn(
    <div>
      <CounterParent />
      <MessageParent />
      <ToggleParent />
      <Functional />
      <ParentComponent message={message} />
      <ToDoApp />
      <LifeCycleComponent />
      <Card data={data} />
      <EventRegistration />
    </div>
  );
};

export default Home;
