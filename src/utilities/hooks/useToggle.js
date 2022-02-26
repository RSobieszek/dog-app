import { useCallback, useState } from "react";

function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return [isOpen, toggle];
}

export default useToggle;
