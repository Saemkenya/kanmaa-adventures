export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username =
      "Kanmaa Adv. requires a username to assign to your account";
  } 
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = "Kanmaa Adv. requires a valid name";
  // }

  if (!values.email) {
    errors.email = "Kanmaa Adv. requires an email to identify you with";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email =
      "Kanmaa Adv. requires a valid email address to create your account";
  }
  if (!values.password) {
    errors.password =
      "Kanmaa Adv. requires a password to authenticate your account";
  } else if (values.password.length < 6) {
    errors.password =
      "Kanmaa Adv. requires a password more than 6 characters long";
  }

  if (!values.password2) {
    errors.password2 = "Kanmaa Adv. requires a confirmation password";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Your passwords need to match";
  }
  return errors;
}

