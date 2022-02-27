import React from "react";
import { string, func } from "prop-types";
import useModal from "./useModal";

// Import components
import { Portal, Button, ModalContainer, Title, Container } from "components";

// Import helpers
import { MODAL_BUTTONS, IMAGE } from "components/atoms/Container/helpers";

function Modal({ selectedBreedType, selectedBreedName, toggle }) {
  const { src, getRandomImage, isFetching } = useModal({ selectedBreedType });

  return (
    <Portal>
      <ModalContainer toggle={toggle}>
        <Title text={selectedBreedName} />
        <Container modifier={IMAGE}>
          <img
            className="object-contain object-center min-w-full min-h-full h-full"
            src={src}
            alt={selectedBreedName}
          />
        </Container>

        <Container modifier={MODAL_BUTTONS}>
          <Button handleClick={getRandomImage} isLoading={isFetching}>
            Show me another doggo!
          </Button>
          <Button handleClick={toggle}>Close</Button>
        </Container>
      </ModalContainer>
    </Portal>
  );
}

Modal.propTypes = {
  selectedBreedType: string,
  selectedBreedName: string,
  toggle: func.isRequired,
};

export default Modal;
