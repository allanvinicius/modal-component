import { useState } from "react";
import { ModalComponent } from "./components/ModalComponent";
import { Home } from "./pages/Home";
import './styles/global.scss';

export function App() {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      <Home onOpenModal={handleOpenModal} />
      <ModalComponent isOpen={modal} onRequestClose={handleCloseModal} />
    </>
  );
}

