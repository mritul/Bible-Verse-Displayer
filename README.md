# Bible Verse Displayer

This project began as a passion project as a tool Churches could use to display scripture verses on the fly.  Most current scripture display software requires the scriptures to be found prior to a service.  The aim for this software is to make an on-the-fly scripture displayer to a second display.  However, I haven't had the time to work on this so I'm opening it up for the open-source community to help on it.  

This repo should be especially valuable to Hacktoberfest coders as it has a simple tech stack and simple (for now) featureset.

**Tech stack**
- [electronjs](https://www.electronjs.org/) is the engine (Javascript)
- CSS styling is made easier with [TailwindCSS](https://tailwindcss.com/docs/installation) classes
- npm package manager


**Getting started**
1. Clone the repo
2. run ```npm install``` to initialize the node_modules
3. Begin coding!

**Project Info**
- The /windows folder contains a control and a present html page.  Control is for the controller finding the verses, and present is for the audience to see.
- To build CSS run: ```npx tailwindcss -i ./src/main.css -o ./dist/main.css --watch```
