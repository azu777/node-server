const fs = require("fs");
const path = require("path");

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

  console.log("content: ", content);
});
