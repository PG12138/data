var fs = require("fs");
function handleData () {
    var data = fs.readFileSync("./00.txt", "utf-8");
    return data;
}

handleData();
