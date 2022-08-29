const component = require('../../components/index')

function mainPage() {
    const name = "daniel";
    
    return `hi my name is ${name}. Route: ${component({ data: { route: '/'}})}`
};

module.exports = {
    name: "Login",
    desciption: "Place to login",
    callback: mainPage()
};