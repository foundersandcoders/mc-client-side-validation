# Client Side Validation
In this challenge, you'll be _styling and validating a sign up form_, a common use case for client side validation.


### what is client side validation?
Client side form validation is the process of testing, and ensuring, that the user has entered required and properly formatted information through the web form. Client side validation is done on the client side - i.e. on the user's browser.

######  Pros
* visually informs users about errors they may have made when inputting information, _i.e._
    * empty mandatory fields
    * passwords not matching when registering
    * email address not in the right format
    * _any time_ you want to control the format in which a user enters information into an input (e.g. form or post data)
* saves resources as you do not have to make a call to the server to check if a user's data is inputted in a valid format

###### Cons
* not 100% fool-proof
* no matter how much front-end validation you have, you should still validate on the server side to ensure that your form is secure  

### The task
![validation-challenge-1](https://user-images.githubusercontent.com/2305591/29023296-0c2107a2-7b65-11e7-9577-5eafb9683a4b.png)


Firstly, style the form using the design as a guide. **Making your own stylistic choices is strongly encouraged.**

Finally, satisfy the following requirements for when the user clicks the submit button:
* if the passwords do not match, please provide a warning as shown in screen two  
* if the email is not valid, please provide a warning as shown in screen 3
* if any of the fields are empty, please provide a warning as shown in screen 4
    * if email is empty, warning should say 'please enter an email address'
    * if password or confirm password are empty, warning should say 'please enter a password'

Requirements:
* don't use inline HTML handlers
* html5 comes with it's own pop up windows for validation. You'll be creating your own custom warning messages, so you should use the attribute which overrides this default behaviour.

### Stretch goal:
* add rules to the password field, so that you can guide users to create stronger passwords
* when the user does not satisfy these rules, let them know before they click the submit button
* now that you can present feedback to the user before they press submit, go back and refactor your previous solutions to do the same
