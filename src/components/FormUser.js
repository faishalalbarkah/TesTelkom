import React from "react";

const FormUser = (props) => {
  return (
    <div>
      <form style={{ marginTop: 50 }} onSubmit={props.getUser}>
        <input
          style={{ margin: "20px auto", display: "block" }}
          type="text"
          name="username"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormUser;
