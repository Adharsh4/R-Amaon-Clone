run npm i seperately on functions folder and the parent folder

run "firebase emulators:start" inside functions folder (since we did not deploy cloud functions)

open the link "https://clone-f43d5.web.app/"


If we want to create cloud functions from start:
firebase init -> select functions -> javascript -> yes for eslint -> yes for dependencies


To deploy only frontend when we are not signed in to firebase:

firebase login
firebase init -> choose hosting
npm run build
firebase deploy --only hosting


then for deploying cloud functions alone(paid - blaze plan for firebase)

firebase deploy --only functions