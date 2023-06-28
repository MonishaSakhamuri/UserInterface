const Register = () => {
  return (
    <div>
      <label for="username"><b>Username</b></label>
      <input type="text" id="username" name="username" placeholder="username"></input>
      <br></br><br></br>
      <label for="email"><b>Email</b> </label>
      <input type="email" id="email" name="email" placeholder="email"></input>
      <br></br><br></br>
      <label for="password"><b>Password</b></label>
      <input type="password" id="pswd" name="password" placeholder="enter password"></input>
      <br></br><br></br>
      <button>register</button>
      <p><b>Alredy have an account</b><a href="login.html">&nbsp;login</a></p>
    </div>

  );
}

export default Register;