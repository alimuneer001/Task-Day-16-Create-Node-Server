const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "message.txt");

fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.log("Error reading file:", error);
    return;
  }

  console.log("File content:");
  console.log(data);
});