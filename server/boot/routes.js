const path = require('path');

module.exports = app => {
	app.get('/sudoku', (req, res) => {
		res.sendFile(path.join(__dirname, '../../dist/index.html'));
	})

	app.get('/register', (req, res) => {
		res.sendFile(path.join(__dirname, '../../dist/index.html'));
	})
}
