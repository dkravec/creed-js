const component = require('../components/index');

function viewPort() {
    return `This is just /. ${component({ data: { route: '/'}})}`
}

module.exports = {
    name: "",
    desciption: "This is the main page.",
    callback: viewPort()
};