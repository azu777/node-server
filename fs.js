const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('created directory')
// });

const filePath = path.join(__dirname, "test", "test.txt");
fs.appendFile(filePath, "\nHello NodeJS!!!", (err) => {
  if (err) {
    throw err;
  }

  console.log("created file");
});

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }

  // const data = Buffer.from(content);
  console.log("content: ", content);
});
