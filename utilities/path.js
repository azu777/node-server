const path = require("path");

console.log("file name", path.basename(__filename));
console.log("file name", path.dirname(__filename));
console.log("file name", path.extname(__filename));
console.log("file name", path.parse(__filename));
console.log(path.join(__dirname, "server", "index.html"));
