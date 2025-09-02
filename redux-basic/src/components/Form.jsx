import React, { useReducer } from "react";

export default function Form() {
  // State to hold user information
  // const [userInfo, setUserInfo] = useState({
  //   name: '',
  //   email: '',
  //   number: ''
  // });

  // Update user information based on input changes
  // const userInfoUpdate = (e) => {
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  // }

  // Using useReducer for state management
  const inisialState = {
    name: "",
    email: "",
    number: "",
  };

  // Update user information based on input changes
  const reducer = (state, action) => {
    switch (action.type) {
      // Update specific field in the state
      case "update":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };

      // Clear specific field in the state
      case "clear":
        return {
          ...state,
          [action.payload.field]: "",
        };

      // Reset state to initial values
      case "reset":
        return inisialState;

      default:
        state;
    }
  };

  // Function to handle input changes
  const [userInfo, dispatch] = useReducer(reducer, inisialState);
  console.log(userInfo);

  // Handle clearing specific field
  const handelClear = (field) => {
    dispatch({
      type: "clear",
      payload: {
        field: field,
      },
    });
  };

  // Handle input change
  const handelOnChange = (e) => {
    dispatch({
      type: "update",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handelOnChange}
          />
          <button onClick={() => handelClear("name")}>Clear</button>
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={handelOnChange}
          />
          <button onClick={() => handelClear("email")}>Clear</button>
        </div>
        <br />
        <div>
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="number"
            value={userInfo.number}
            onChange={handelOnChange}
          />
          <button onClick={() => handelClear("number")}>Clear</button>
        </div>
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </form>
      <br /> <br /><br />

      
    </div>
  );
}
