# e-commerce-frontend
Front end user interface for Scandiweb Junior Developer test task.

## Usage

On the Product List page ('/') the user can view all products that are stored in the database and perform a mass delete of items by checking the checkboxes on the item tiles and pressing the MASS DELETE button.
<br></br>
Clicking the ADD button will redirect the user to the page to the Product Add page where they can add a new product to the database.
A select menu allows the user to choose what category the item falls under out of BOOK,DVD or FURNITURE, the form will change dynamically to accept the appropriate value for the selected type.
<br></br>
If all of the form inputs are not fully completed the page will alert the user and ask them to fill in the missing inputs.
An error message will show up on each of the inputs if the character type is incorrect, fo example if the user tries to write letters in the PRICE input, the error will ask them to only use numerical values.
<br></br>
Once the SAVE button is clicked, the user will be redirected to the Product List page where the newly added product will be displayed at the end of the product list.
