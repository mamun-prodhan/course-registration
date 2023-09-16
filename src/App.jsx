import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="bg-[#F3F3F3] flex flex-col md:flex-row px-16">
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  );
}

export default App;
