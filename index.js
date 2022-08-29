const express = require('express');
const app = express();
const port = 3000;
const readDirectory = require('./utils/getFiles/index');

async function mainFunction({ html_path }) {
    // const server = http.createServer(app);
    
    console.log("this will run");

    // console.log(readDirectory())
    // console.log(html_path)
    const routes = await readDirectory({ "directory": html_path })
    console.log(routes)

    const builtApp = await buildView({routes: JSON.stringify(routes) })
    // app.use(cors())

    app.get('/script.js', (req, res) => {
        res.send(SwitchRoutes({ routes }))
    });
    
    app.get('/*', (req, res) => {
        console.log(builtApp)
        res.send(builtApp)
        // res.sendFile();
    });

    app.listen(port, () => console.log(`Server started on port ${port}!`));
};

async function buildView({ routes }) {
    console.log(routes)
    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <script type="text/javascript">
                    const routes = ${routes};
                    // const routes = JSON.parse(routesString);
                    console.log(routes)
                    var getUrl = window.location;
                    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
                    var pathArray = window.location.pathname.split( '/' );
                    console.log(pathArray)
                    for (const route of routes) {
                        console.log(route.name.toLowerCase())
                        console.log(pathArray[1].toLowerCase())
                        if (route.name.toLowerCase() == pathArray[1].toLowerCase()) {
                            console.log(route + " found")

                            document.getElementById('root').innerHTML=route.callback();
                        };
                    };
                </script>
            </head>
            <body>
                <div id="root">hi</div>
        </body>
        </html>
    `

    return html;
};  

function SwitchRoutes({ routes }) {
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var pathArray = window.location.pathname.split( '/' );

    for (const route of routes) {
        if (route.name.toLowerCase() == pathArray[2].toLowerCase()) {
            // document.getElementById('root').innerHTML=route.callback()
        }
    }
}

module.exports = mainFunction;
