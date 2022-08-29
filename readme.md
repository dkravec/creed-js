# Creed-JS
Created by Daniel Kravec, on August 28th, 2022.

# Information
This will be a framework as light as possible, which will be able to handle routes for you, and put everything into a light html/js/css file or folder for you. or it could also be hosted via express.

You will be able to have components and routes simliar other frameworks, but with the hope of it being extra light on the server + on the client. Keep developing your normal plain html website and into Creed-JS.

# How to Download
```
npm install @dkravec/creed-js
```

# How to Use
More information coming soon.

# Versions

## @dkravec/creed-js@0.0.1
### 0.0.1 (2022.08.29)
Created August 28/29, 2022
- Uses express currently
- Created /example, and runTest.js to have a local development to test if things work.
- /utils/getFiles and /switchroutes
- currently not working correctly, but on its way.

## @dkravec/creed-js@0.0.2
### 0.0.2 (2022.08.29)
- Moved script after root div appears.
- Makes so route's callback is before instead of after.
- Added component test in /login.
- Changed main page's name to just "", from "main page". (so it will render at /)
- Updated package description.


# Later ideas
- get possible routes, provide to frontend, then fetch tall the possible scripts that it will need (or as it needs), then replaces the root element with that
- For routes: have a "routes" export, and as an array. it will allow mutiple routes to lead to the same page.