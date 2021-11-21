import React from "react";
import { RecoilRoot } from "recoil";

// import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
