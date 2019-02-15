SELECT  songs.songid, songs.title, songs.artist, songs.genre, songs.url, songs.image
 FROM songs
INNER JOIN favorites ON songs.songid=favorites.songid
WHERE favorites.username=$1