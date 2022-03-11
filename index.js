import chalk from 'chalk';
import { readFile, promises } from 'fs';

const encoding = 'utf-8';

function error(err){
  throw new Error(chalk.red(err.code, 'Could not read this path'));
}


/*
  ===============================================

  Regular way to throw error or return data.

  ===============================================
*/

// function pegaArquivo (file) {
//   readFile(file, encoding, (err, data) => {
//     if (err) {
//       error(err);
//     }
//     console.log(chalk.green(data));
//   });
// }

/*
  ===============================================

  More sofisticated then regular way, but not 
  the most one. In this case, we use Promises
  constructors methods.

  ===============================================
*/

// function pegaArquivo(file){
//   promises
//   .readFile(file, encoding)
//   .then((data) => console.log(chalk.green(data)))
//   .catch((err) => error(err))
// }


/*
  ===============================================

  Async/Await error treatment is the cleanest and
  don't need to worry about indentation to much.
  Besides, use try/catch methods to reach error.

  ===============================================

*/

async function pegaArquivo(file){
  try{
    const data = await promises.readFile(file, encoding)
    console.log(chalk.green(data));
  }catch(err){
    error(err)
  }
}


pegaArquivo('./arquivos/texto1.md');


