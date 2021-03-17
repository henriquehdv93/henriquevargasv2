import { extend, localize } from "vee-validate";
import { required, email, min, regex } from "vee-validate/dist/rules";
import pt_BR from 'vee-validate/dist/locale/pt_BR.json';

// Vue.use(extend, {
//   inject: true
// });

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

// Install regex rule.
extend("regex", regex);

localize('pt_BR', pt_BR);
// import { required, alpha } from "vee-validate/dist/rules";

// extend("required", {
//   ...required,
//   message: "This field is required"
// });

// extend("alpha", {
//   ...alpha,
//   message: "This field must only contain alphabetic characters"
// });
