import React from "react";

function Login(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = formValue;
    props.onLogin(password, email);
  }
  return (
    <div className="auth-container">
      <form
        className="form form_type_auth"
        name="login_form"
        method="post"
        onSubmit={handleSubmit}
      >
        <h2 className="form__title">Вход</h2>
        <fieldset className="form__field">
          <input
            className="form__input form__input_type_auth form__input_type_email"
            type="email"
            placeholder="Email"
            name="email"
            minLength="2"
            maxLength="256"
            value={formValue.email || ""}
            onChange={handleChange}
            required
          />
          <span className="form__input-error email-error"></span>
        </fieldset>
        <fieldset className="form__field">
          <input
            className="form__input form__input_type_auth form__input_type_password"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="6"
            maxLength="12"
            value={formValue.password || ""}
            onChange={handleChange}
            required
          />
          <span className="form__input-error password-error"></span>
        </fieldset>
        <button type="submit" className="button button_type_auth">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
