import { v4 as uuidv4 } from 'uuid';

function generateUniqueID(firstname, lastname){
    var generatedID = uuidv4();
    var id = generatedID.slice(0, 8);
    return (firstname[0] + lastname + id);
}

export default { generateUniqueID };