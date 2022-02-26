import React from "react";
import useDogList from "./useDogList";

// Import components
import { Card, CardButtons, Modal, Container } from "components";

// Import helpers
import { CARDS } from "components/atoms/Container/helpers";

function DogList() {
  const {
    breeds,
    selectedBreed,
    selectedBreedName,
    selectBreed,
    isOpen,
    toggle,
  } = useDogList();

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
          selectedBreed={selectedBreed}
          selectedBreedName={selectedBreedName}
          toggle={toggle}
        />
      )}
    </>
  );
}

export default DogList;
