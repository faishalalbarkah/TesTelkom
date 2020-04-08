import React from "react";

const FormUser = () => {
  return (
    <div>
      <form style={{ marginTop: 50 }}>
        <input
          style={{ margin: "20px auto", display: "block" }}
          type="text"
          name="username "
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormUser;
