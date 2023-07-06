import { useState } from "react";
import {fetchData} from "../../main.js";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    postcontent: ""
  });

  const { title, postcontent } = post;

  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    let parseUser = JSON.parse(user);
    let userId = parseUser.username; // Corrected property name
    fetchData("/post/createpost", { title, postcontent, userId }, "POST")
      .then((data) => {
        if (data) {
          console.log(data);
          navigate("/posts");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let user = localStorage.getItem("user");
  let parseUser = JSON.parse(user);
  let userName = parseUser?.username; // Corrected property name

  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          onChange={onChange}
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="post">Post Content</label>
        <textarea
          className="form-control"
          name="postcontent"
          id="content"
          onChange={onChange}
          rows="2"
        ></textarea>
      </div>
      <p>Welcome, {userName}</p>
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Profile;