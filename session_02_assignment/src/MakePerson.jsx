import { useState } from "react";

function MakePerson() {
  const [name, setName] = useState("user");
  const [age, setAge] = useState(0);

  const decreaseAge = (age: number) => {
    if (age <= 0) {
      alert("Age cannot be less than zero");
      setAge(age);
      return;
    }
    setAge(age - 1);
  };

  const increaseAge = (age: number) => {
    setAge(age + 1);
  };

  const updateName = (name: string) => {
    setName(name);
  };

  return (
    <>
      <h2>
        <i>
          Hello, {name} of age {age}.
        </i>
      </h2>
      <span style={{ display: "block" }}>
        Age - {age}
        <button
          onClick={() => {
            decreaseAge(age);
          }}
          style={{ margin: "0 10px" }}
        >
          Age--
        </button>
        <button
          onClick={() => {
            increaseAge(age);
          }}
          style={{ margin: "0 10px" }}
        >
          Age++
        </button>
      </span>

      <br />

      <label htmlFor="name" style={{ marginRight: "10px" }}>
        Enter your name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}

export default MakePerson;
