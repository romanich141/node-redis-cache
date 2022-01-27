import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import axios from "axios";
import { useState } from "react";
import RepoInfo from "./components/RepoInfo";

const App = () => {
  const [ username, setUsername ] = useState(null);
  const [ data, setData ] = useState({});
  const [ error, setError ] = useState(false);

  const sendUsername = async () => {
    try {
      error && setError(null);
      const response = await axios.get(`http://localhost:9876/repos/${ username }`)
      setData(response.data);
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  return (
    <Form>
        <h3>Search repositories on github by username</h3>
        <Input
           initialValue = "" 
           placeholder = "Input username"
           callback = { setUsername }
        />

      <Button
        onClick = { sendUsername }
        isDisable = { !username }
      >
        Find
      </Button>
      { error && (<div>{ error }</div>) }
      <RepoInfo data={ data } />
    </Form>
  );
}

export default App;
