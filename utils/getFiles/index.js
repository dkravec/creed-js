const fs = require('fs');
const path = require('path');

const data = {};
data.table = [];

const readCommands = async dir => {
    console.log(path.join(__dirname, dir))
    const files = fs.readdirSync(path.join(__dirname, dir));
    for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
            readCommands(path.join(dir, file));
        } else {
            const option = require(path.join(__dirname, dir, file));
            var obj = option;
            
            data.table.push(obj);
        };
    };
};

async function readDirectory( {directory} ) {
    console.log(directory)
    await readCommands(`../../${directory}`);
    return data.table;
};

module.exports = readDirectory;