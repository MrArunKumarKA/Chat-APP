import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const username = e.target[0].value;
      const password = e.target[1].value;
      axios.post(
        "http://localhost:3001/authenticate",
        {
            username: username,
            password: password
        }
      )
      .then(r => {
        props.onAuth({ ...r.data, secret: password });
      })
      .catch (e => console.log(e)) 
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <div className="auth-label">Password</div>
            <input className="auth-input" name="secret" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;