let readlineSync = require("readline-sync")

function main () {
    for (let i=0; i>=0;i++) {
    let inputStr = readlineSync.question(`Type a phrase (or quit to exit program): `)
    if (inputStr.toLowerCase() == "quit") {
        return
    };
    let letterToRedact = readlineSync.question(`Type a a comma-separated list of letters to redact:  `);

    let arrayInput = inputStr.split(``);
    let arrayLtR = letterToRedact.split(``);
    
    let letterRemoved = 0;
    for(let i=0; i < arrayInput.length; i++) {
        if (arrayLtR.includes(arrayInput[i].toLowerCase())) {
            letterRemoved ++;
            arrayInput[i]= "_";
        }
    }
    console.log(`Number of letters redacted: ${letterRemoved}`);
    console.log(`Redacted phrase: ${arrayInput.join(``)}`)
    
    } 
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
