let readlineSync = require("readline-sync")

function main () {
    let guiders = parseInt(readlineSync.question(`Enter the number of guides selling cookies: `))

    let totalBoxSold=0;

    let guider = [];  
   
    for (let i=0;i<guiders;i++) {

        let guideName = readlineSync.question(`Enter the name of guide #${i+1}: `);
       
        let eachPboxSold= parseInt(readlineSync.questionInt(`Enter the number of boxes sold by ${guideName}: `));
        
        guider.push([guideName,eachPboxSold])

        totalBoxSold = totalBoxSold + eachPboxSold;
    }

    console.log(`The average number if boxes sold by each guide was ${(totalBoxSold/guiders).toFixed(1)}`)

    console.log(`Guide          Prizes Won`)

    console.log(`--------------------------------------------`)
    
    let highestBoxSold = Math.max(...guider.map(data => data[1]))
    console.log(highestBoxSold)

    let averageBoxesSold = totalBoxSold/guiders.toFixed(1)

    for (let i = 0; i < guider.length; i++) {
        let guideName = guider[i][0];
        let boxesSold = guider[i][1];

        if (boxesSold > averageBoxesSold && boxesSold !== highestBoxSold) {
            console.log(`${guideName}         - Super Seller Badge`);
        } else if (boxesSold <= averageBoxesSold && boxesSold !== 0) {
            console.log(`${guideName}        - Leftover Cookies`);
        } else if (boxesSold === highestBoxSold) {
            console.log(`${guideName}       - Trip to Girl Guide Jamboree in ARUBA`);
        } else if (boxesSold === 0) {
            console.log(`${guideName}     -`);
        }
    }

   
}


















if (require.main === module)
{
    main();
}
