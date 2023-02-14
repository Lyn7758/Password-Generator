# Password-Generator
This project generates a password based on the user's input.

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written zto the page

This project developed by Yinan Li.
I first wrote two functions, the determineCriteria function and passwordLength function. They will be called in the main generatePassword function and  grab the input from the user. If the requirement is out of bounds, they will be prompted again to enter the correct criterias.
The Arraylist will be concated and then randomized by a random generator. It is lastly printed to the screen.

The website link is : https://lyn7758.github.io/Password-Generator/

The link to the github repository is : https://github.com/Lyn7758/Password-Generator

![image](https://user-images.githubusercontent.com/91827133/218639866-58049ec1-8c42-4d7b-a876-dd9a73d1a4d1.png)
