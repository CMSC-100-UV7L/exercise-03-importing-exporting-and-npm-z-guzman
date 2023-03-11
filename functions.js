import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(firstname, lastname){
    var generatedID = uuidv4(); // Generates id using the uuid import
    var id = generatedID.slice(0, 8); // Shortens the generated id to 8 characters
    return (firstname[0].toLowerCase() + lastname.toLowerCase() + id); // Returns concatenated id string 
}

function addAccount (details){
    var isValid = false; // Credentials are marked false by default
    if (details.length == 4){ // Checks if array given contains exactly four fields
        if (typeof details[0] === 'string' && typeof details[1] === 'string' && typeof details[2] === 'string'){ // Checks type of the first three elements of the array
            if (details[0] && details[1] && details[2]){ // Checks if the first three elements of the array are non-empty
                if (validator.isEmail(details[2])){ // Validates email format using the validator import
                    if (details[3] >= 18){ // Checks if age is equal or above 18
                        isValid = true; // Marks the given credentials as valid
                        var newID = generateUniqueID(details[0], details[1]); // Creates new ID using the generateUniqueID function
                        details.push(newID); // Appends the ID to the given array
                        const stringedDetails = JSON.stringify(details); // Turns array into string
                        fs.appendFileSync('users.txt', (stringedDetails + "\n")) // Appends details to file
                    }
                }
            }
        }
    }

    console.log(isValid);
    return isValid; // Returns boolean status of credentials
}

export default { generateUniqueID, addAccount }; // Exports to test file