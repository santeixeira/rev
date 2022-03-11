import chalk from 'chalk';
import { readFile, promises } from 'fs';

const encoding = 'utf-8';

function error(err){
  throw new Error(chalk.red(err.code, 'Could not read this path'));
}

/*
  ===============================================

  Async/Await error treatment is the cleanest and
  don't need to worry about indentation to much.
  Besides, use try/catch methods to reach error.

  ===============================================

*/

function extractLinks(data) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const result = [];
  let temp;
  while((temp = regex.exec(data)) !== null) {
    result.push(({ [temp[1]]: temp[2]}))
  }
  return result.length === 0 ? 'There is no links in this text file': result;
}


export default async function search(file){
  try{
    const data = await promises.readFile(file, encoding)
    return extractLinks(data);
  }catch(err){
    error(err)
  }
}


//search('./arquivos/texto1.md');
export { search } ;





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


