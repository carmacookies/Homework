console.log('connect')

async function handleLogin(event:any) {
    event.preventDefault();
    try {
      let { email, password } = event.target.elements;
      email = email.value; 
      password = password.value;
        //@ts-ignore
      const { data } = await axios.post("/users/login", {email, password});
      const { user, login, error } = data;
      console.log(user);
      console.log("This is the logged in USER", user);
      console.log("This is the logged in DATA", data);
      event.target.reset();
  
      if (login) {
        window.location.href = `./profile.html?userId=${user._id}`;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRegister(e:any) {
    e.preventDefault();
    try {
      let { email, password } = e.target.elements;
      email = email.value;
      password = password.value;
  //@ts-ignore
      const { data } = await axios.post("users/register", {
        email,
        password,
      });
      const { result, register, error } = data;
      console.log(result);
      console.log(result._id);
  
      if (error && error.includes("E11000")) alert("email is already in use");
      console.log(data);
      e.target.reset();
  
      window.location.href = "./login.html?";
  
    } catch (error) {
      console.error(error);
    }
  }