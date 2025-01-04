# React Alohomora
## Authorization Component For React JS
You can manage role based authorization with this package. Define keys according to user roles then give them to context provider. You can define secure fields with Alohomora component that only displays if the keys given to it match the keys from the context provider

Main Branch is the newest version

```bash

npm i react-alohomora
```


```jsx
import React from "react";
import { Alohomora, AlohomoraContext } from "react-alohomora";

const App = () => {
  return (
    <AlohomoraContext.Provider value={{ keys: ["hogwarts.headmaster"] }}>
      <Alohomora keys={["ministryOfMagic.minister", "hogwarts.headmaster"]}>
        Forbidden Forest
      </Alohomora>
      <Alohomora keys={["ministryOfMagic.minister"]}>
        Department Of Mysteries
      </Alohomora>
    </AlohomoraContext.Provider>
  );
};
```