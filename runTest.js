const creedJS = require('./index');

async function Test() {
    await creedJS({html_path: "example/routes"});
};

Test();