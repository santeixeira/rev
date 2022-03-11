import search from "./index.js"
import chalk from "chalk";
import ValidateURL from "./httpValidation.js"



const path = process.argv;


async function textProcess(file){
    const result = await search(file[2]);
    
    if(path[3] === 'validate') {
        console.log(chalk.bgYellow.black(`--> Validated links: \n`), await ValidateURL(result))
    } else {
        console.log(chalk.bgYellow.black(`--> File return: \n`), result)
    }
}

textProcess(path)

