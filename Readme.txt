C:> cd /D F:\COURS\JavaScript\ReactJS
npm install -g babel
npm install -g babel-cli
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
npm install react --save
npm install react-dom --save
npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev

create file 
		index.html
		app.jsx
		main.js
		webpack.config.js

In file package.json change "test": "echo \"Error: no test specified\" && exit 1"
with "start": "webpack-dev-server --hot"

run the application with npm start
