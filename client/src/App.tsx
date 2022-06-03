import { useContext, useState } from "react";

import { ClientContext } from ".";
import { HelloReply, HelloRequest } from "./stubs/main_pb";

function App() {
  const [value, setValue] = useState<string>("");
  const [msg, setMsg] = useState<string | null>(null);
  const greeterClient = useContext(ClientContext);

  async function helloWorld() {
    const request = new HelloRequest();
    request.setName(value)

    try {
      const response: HelloReply = await greeterClient.sayHello(request, {});
      setMsg(response.getMessage());
    } catch (err: any) {
      console.error("error code", err.code);
      console.error("error message", err.message);
    }
  }

  return (
    <>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={helloWorld}>Send Request</button>
      </div>
      {msg && <div>
        {msg}
      </div>}
    </>
  );
}

export default App;
