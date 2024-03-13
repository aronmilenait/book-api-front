import { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import BookGrid from "./components/BookGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <AddBook onAddBook={() => setCount(count + 1)} />
      <BookGrid books={[]} />
    </>
  );
}

export default App;
