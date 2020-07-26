const App = require('./app');
const app = new App();

app.start();

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});