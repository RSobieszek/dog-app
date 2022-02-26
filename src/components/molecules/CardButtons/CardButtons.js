import React from "react";
import { array, func } from "prop-types";

// Import components
import { Button, Container } from "components";

// Import helpers
import { CARD_BUTTONS } from "components/atoms/Container/helpers";

function CardButtons({ data, selectBreed }) {
  const [breed, subBreeds] = data;

  if (subBreeds.length) {
    return (
      <Container modifier={CARD_BUTTONS}>
        {subBreeds.map((subBreed) => {
          return (
            <Button
              key={subBreed}
              handleClick={() => selectBreed({ breed, subBreed })}
            >
              {subBreed} {breed}
            </Button>
          );
        })}
      </Container>
    );
  }

  return (
    <Container modifier={CARD_BUTTONS}>
      <Button handleClick={() => selectBreed({ breed })}>{breed}</Button>
    </Container>
  );
}

CardButtons.propTypes = {
  data: array,
  selectBreed: func,
};

export default CardButtons;
