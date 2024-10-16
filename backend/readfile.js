const fs = require("fs");

fs.readFile("node.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Create or Update (writeFile)
fs.writeFile("node1.txt", "This is the initial content", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been created/updated");

  // Read the file
  fs.readFile("node1.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Read file content:", data);

    // Update (appendFile)
    fs.appendFile("node1.txt", "\nThis content is appended", "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("New content has been appended");

      // Read the updated file
      fs.readFile("node1.txt", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Updated file content:", data);

        // Delete the file
        // fs.unlink("node.txt", (err) => {
        //   if (err) {
        //     console.error(err);
        //     return;
        //   }
        //   console.log("File has been deleted");
        // });
      });
    });
  });
});
