import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import fs from 'fs';

function generateUniqueID(firstname, lastname){
    var generatedID = uuidv4();
    var id = generatedID.slice(0, 8);
    return (firstname[0].toLowerCase() + lastname.toLowerCase() + id);
}

function addAccount (details){
    var isValid = false;
    if (details.length == 4){
        if (typeof details[0] === 'string' && typeof details[1] === 'string' && typeof details[2] === 'string'){
            if (details[0] && details[1] && details[2]){
                if (validator.isEmail(details[2])){
                    if (details[3] >= 18){
                        isValid = true;
                        var newID = generateUniqueID(details[0], details[1]);
                        details.push(newID);
                        const stringedDetails = JSON.stringify(details);
                        fs.appendFileSync('users.txt', (stringedDetails + "\n"))
                    }
                }
            }
        }
    }

    console.log(isValid);
    return isValid;
}

export default { generateUniqueID, addAccount };