export const CARD_BUTTONS = "CARD_BUTTONS";
export const MODAL_BUTTONS = "MODAL_BUTTONS";
export const CARDS = "CARDS";
export const IMAGE = "IMAGE";
export const MAIN_LOADER = "MAIN_LOADER";

export const CONTAINER_MODIFIERS = {
  [CARD_BUTTONS]: "grid sm:grid-cols-3 gap-4",
  [MODAL_BUTTONS]: "grid gap-5 grid-cols-2",
  [CARDS]: "grid sm:grid-cols-2 xl:grid-cols-3",
  [IMAGE]: "block h-[30rem]",
  [MAIN_LOADER]: "h-[calc(100vh-4rem)] grid place-items-center",
};
