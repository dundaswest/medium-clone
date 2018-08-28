DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
   id INT,
   title VARCHAR(70),
   text VARCHAR(5000),
   claps Int,
   author_id Int,
   primary key(id)
);
DROP TABLE IF EXISTS authors;
CREATE TABLE authors (
   id INT,
   name VARCHAR(70),
   pic_url Varchar(300),
   description VARCHAR(1000),
   primary key(id)
);


INSERT INTO articles (id,title, text, claps,author_id)
    VALUES (1,'How to Sing like yedam', 'It’s just another day… and you’re just doing what you need to do.

You’re getting things done, and the day moves forward in this continuous sequence of checklists, actions, and respites.

But at various moments of your routine, you pause and take a good look at your surroundings.

The scenes of your everyday life. The blur of this all-too-familiar film.

And you can’t help but to wonder…

If there is more to it all.

For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.

And it is this thought that allows a daydream to seep in.

You start thinking of all the other places you could be in this world.

Or more accurately, all the places you’d rather be in.

Somewhere more exciting. Somewhere new. Somewhere that can provide experiences that are foreign to you.

You dream of going to the beautiful beaches of Thailand:', 106, 1);


INSERT INTO authors (id,name,pic_url, description)
    VALUES (1,' Yedam Rachmaninoff','/Users/jo-eunbyeol/workspace/medium-project/client/src/js/Yedam.jpg','Philosophy, Literature, Food, Computer Science. Questions are underrated. Likes complexity but not that kind of complexity.');


