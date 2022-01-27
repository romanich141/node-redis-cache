import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

const App = () => {
  return (
    <Form>
        <h3>Search repositories on github by username</h3>
        <Input
           initialValue="" 
           placeholder="Input username"
        />

      <Button
        onClick = { () => console.log("click") }
        isDisable = { false }
      >
        Find
      </Button>
    </Form>
  );
}

export default App;
