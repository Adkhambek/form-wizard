# Form Wizard:

The implementation of form wizard: user goes through some steps with forms, filling out user register data.

## Requirements:

- On each step we have button "Next", which becomes enabled only when all required fields values are valid.
- Showing errors - any way you prefer

## Step 1: user enters login and password.

- Login must be entered in lowercase - required field
- Password must be longer than 5 symbols - required field
- password must contain at least one letter and one number
- Password symbols must be hidden
- Additional password confirmation field must be shown to make user verify that the password is right

## Step 2: user chooses subscription type (like on a stream service, e.g. Netflix)

- Free option (but card must be attached on the next step anyway)
- Monthly subscription
- Yearly subscription
- User can't skip this step without choosing an option

## Step 3 - user enters personal info

- First name - required
- Last name - required
- Middle name - optional field
- birthdate - optional
- email - required + check that email is valid
- gender - make/female (select input) - required
- User is older than 18 (checkbox) - required

## Step 4 - user enters credit card number

- Card field must have the mask that formats data right, allows only numbers, length, etc. Use this as an example https://nosir.github.io/cleave.js/ - choose any format you prefer
- This field is required

## Step 5 - The consent to personal data processing

- Show login and email user entered before - disabled, can't be updated
- The consent to personal data processing (checkbox) - required
- Site uses cookie agreement (checkbox) - required

## Final step

- show all fields user entered on previous steps

## Libraries/technologies:

- Data storage: your preference - state manager, or RxJS, or React Context, props. Your choice should be agrumented during the call with your mentor.
