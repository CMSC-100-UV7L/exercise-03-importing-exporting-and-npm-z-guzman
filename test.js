import functions from "./functions.js"; // Imports functions from function file

// False
functions.addAccount(["Alan", "Turing", "aturing@w3c.com"]); //False: Not enough fields have been filled out
functions.addAccount(["Alan", "Turing", "aturing@w3c.com", 58, "British"]); //False: Too many fields
functions.addAccount([69, "Turing", "aturing@w3c.com", 58]); //False: First name is not a string
functions.addAccount(["Alan", "", "aturing@w3c.com", 58]); //False: Last name is an empty string
functions.addAccount(["Alan", "Turing", "aturingw3c.com", 58]); //False: Email is not in proper format
functions.addAccount(["", "Turing", "aturing@w3c.com", 16]); //False: Age is under 18

// True
functions.addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
functions.addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]);
functions.addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]);
