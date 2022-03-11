import fetch from "node-fetch";

async function checkStatus(arrayURLs){
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url);
        return res.status;
    }))
    return arrayStatus;
}

function generateArrayURL(arrayLinks){
    return arrayLinks.map(obj => Object.values(obj).join());
}

export default async function ValidateURL(arrayLinks) {
    const links = generateArrayURL(arrayLinks);
    const status = await checkStatus(links);
    return status;
}

export { ValidateURL }