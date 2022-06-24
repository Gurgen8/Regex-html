const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>JavaScript Learn</title></head><body><h1>JavaScript</h1><script src="./js/script.js"></script></body></html>`
const regex = /(<([^>]+)>)/ig
const result = html.replace(regex, "");
console.log(result);