var fs = require("fs");
function handleData (index, day) {
    var data = fs.readFileSync("./" + index + ".txt", "utf-8");
    data = data.split(day)[0];
    return data;
};
handleData(
