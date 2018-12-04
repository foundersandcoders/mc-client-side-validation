# Client-side Validation

In this challenge, you'll be **styling and validating a sign up form**, a common use case for client-side validation.

## What is client-side validation?

Client side form validation is the process of testing and ensuring that the user has entered required and properly formatted information through the web form. Client side validation is done on the client side - i.e. on the user's browser.

#### Benefits
- Client-side validation can be a **great UX win** when implemented well, giving users instant and helpful feedback. It is a powerful and now very common feature- check out the sign-up form on one of your favourite websites for inspiration.
- It also **reduces server load**, by stopping requests with invalid data from being sent.

#### Important Note
Client-side validation **does not offer increased security**, because 'invalid' requests can easily be sent outside of the browser, e.g. using a tool like `curl`. Therefore client-side validation should be used in addition to server-side validation.

## The task

![validation-challenge-1](https://user-images.githubusercontent.com/2305591/29023296-0c2107a2-7b65-11e7-9577-5eafb9683a4b.png)

#### Challenge

You'll be making a sign up form which is validated on the client-side.

#### Technical requirements:

* if using event listeners, attach event listeners in JS, not directly in HTML with `on<event>`
* HTML5 comes with it's own pop up windows for validation. You'll be creating your own custom warning messages, so you should use the attribute which overrides this default behaviour
* HTML5 _validation_ is allowed, but **do not** use the default _styling_ - must be custom styled
* add rules to the password field, so that you can guide users to create stronger passwords

#### Steps

Firstly, style the form using the design as a guide. **Making your own stylistic choices is strongly encouraged.**

Then, satisfy the following requirements for when the user clicks the submit button:

* if the passwords do not match, please provide a warning as shown in screen two
* if the email is not valid, please provide a warning as shown in screen 3
* if any of the fields are empty, please provide a warning as shown in screen 4
  * if email is empty, warning should say 'please enter an email address'
  * if password or confirm password are empty, warning should say 'please enter a password'

#### Stretch goals

* when the user does not satisfy these rules, let them know before they click the submit button
* now that you can present feedback to the user before they press submit, go back and refactor your previous solutions to do the same

## Resources

[MDN form validation docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
