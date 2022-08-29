function mainPage() {
    const name = "daniel";
    
    return `hi my name is ${name}, and this is /login`
};

module.exports = {
    name: "Login",
    desciption: "Place to login",
    callback: mainPage
}