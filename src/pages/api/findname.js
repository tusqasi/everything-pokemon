import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export default async function handler(req, res) {
	if (!db) {
		db = await open({
			filename: "/static/poke.db",
			driver: sqlite3.Database,
		});
	}
	const partial_name = req.body.partial_name;
	const limit = req.body.limit ? req.body.limit : 10;
	const query = `select * from pokemon_stats where name like '%${partial_name}%'`;

	const found = await db.all(query);
	console.log(found);
	res.status(200).json({
		products: found.slice(0, limit)
	});
}
