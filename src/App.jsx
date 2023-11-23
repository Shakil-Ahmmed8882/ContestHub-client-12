import Button from "./Components/Ui/Button";
import "./App.css";
import TitleDescription from "./Components/Ui/TitleDescription ";
import useGetOpenData from "./Hooks/useGetOpenData";

function App() {
  const [data] = useGetOpenData()

  console.log(data)
  return (
    <>
      <h1>Assignment 12</h1>
      <TitleDescription
      title='Congratulations'
      description='You have finished the course on time being dicipline'
      ></TitleDescription>
      <Button text='hello'></Button>
    </>
  );
}

export default App;
