// const sqlite3 = require('sqlite3').verbose();
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export default async function handler(req, res) {
	if (!db) {
		// If the database instance is not initialized, open the database connection
		db = await open({
			filename: "./public/static/poke.db", // Specify the database file path
			driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case),
		});
	}
	const partial_name = req.body.partial_name;
	const limit = req.body.limit ? req.body.limit : 10;
	// const found = await db.get(`SELECT name FROM pokemon_stats WHERE name LIKE '%${partial_name}%'`)
	console.log(typeof (partial_name));
	const query = `select * from pokemon_stats where name like '%${partial_name}%'`;
	// __AUTO_GENERATED_PRINT_VAR_START__
	console.log("handler query: %s", query); // __AUTO_GENERATED_PRINT_VAR_END__

	const found = await db.all(query);
	// const found = data.products.filter((element) => element.name.includes(partial_name));
	console.log(found);
	res.status(200).json({
		products: found.slice(0, limit)
	});
}
