INSERT INTO favorites (username, songid)
VALUES ($1, $2)
RETURNING *