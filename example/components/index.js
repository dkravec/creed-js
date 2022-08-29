function component({ data }) {
   return `this is a test of a component. Route: ${data.route? data.route : "unknown"}`
}

module.exports = component