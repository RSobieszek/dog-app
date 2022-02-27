import React from "react";
import useDogList from "./useDogList";

// Import components
import { Card, CardButtons, Modal, Container, Loader } from "components";

// Import helpers
import { CARDS, MAIN_LOADER } from "components/atoms/Container/helpers";
import { MAIN_SIZE } from "components/atoms/Loader/helpers";

function DogList() {
  const {
    breeds,
    selectedBreedType,
    selectedBreedName,
    selectBreed,
    isOpen,
    toggle,
    isLoading,
  } = useDogList();

  if (isLoading)
    return (
      <Container modifier={MAIN_LOADER}>
        <Loader modifier={MAIN_SIZE} />
      </Container>
    );

  return (
    <>
      <Container modifier={CARDS}>
        {breeds.map((breed) => {
          const [breedName] = breed;
          return (
            <Card key={breed} title={breedName}>
              <CardButtons data={breed} selectBreed={selectBreed} />
            </Card>
          );
        })}
      </Container>
      {isOpen && (
        <Modal
          selectedBreedType={selectedBreedType}
          selectedBreedName={selectedBreedName}
          toggle={toggle}
        />
      )}
    </>
  );
}

export default DogList;
