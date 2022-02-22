import React, { useState } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const showBlockHandler = () => {
    setShowBlock(!showBlock);
  }


  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={showBlockHandler}>Toggle</button>
      <br />
      <Transition in={showBlock} timeout={500} mountOnEnter unmountOnExit>
        {state => (
          <div
            style={{
              backgroundColor: 'maroon',
              width: 100,
              height: 100,
              magin: 'auto',
              transition: 'opacity .5s ease-out',
              opacity: state === 'exiting' ? 0 : 1
            }}
          />
        )}
      </Transition>
      <Modal show={modalIsOpen} closed={closeModal} />
      {modalIsOpen && <Backdrop show />}
      <button className="Button" onClick={showModal}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
