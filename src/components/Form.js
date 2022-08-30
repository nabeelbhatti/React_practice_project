import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [topic, setTopic] = useState("");

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${username} ${comment} ${topic}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>UserName</label>
        <input
          type="text"
          value={username}
          onChange={handleUserNameChange}
        ></input>
        <label>Comments</label>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
        ></input>
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} onChange={handleTopicChange}>
          <option value="react">React</option>
          <option value="angular">Angualar</option>
          <option value="vue">Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
