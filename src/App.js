// Import components
import { Header, DogList } from "components";

/**
 * To whomever will read this code. I've tried to keep things simple and also learn
 * something on the way. It's my first approach to Tailwind. The hype on it is huge and this
 * was good oportunity to test it. Normally I work mostly with SCSS and styled-components so Tailwind
 * feels weird ;) I've also rejected using some big UI libraries (Material or AntD).
 * I'm confident that using useState is enought for app this size (no Redux or Context used).
 *
 * Happy code review ;)
 */

function App() {
  return (
    <>
      <Header />
      <DogList />
    </>
  );
}

export default App;
