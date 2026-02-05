import express from 'express';
import Database from 'better-sqlite3';

const app = express();

app.use(express.static('public'));

const db = new Database("hittastic.db");

const PORT = 3000;

app.get('/artist/:artist', (req, res) => {
	const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist=?");
	const results = stmt.all(req.params.artist);
	res.json(results);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`);
});
