SELECT film_actor.last_update, film.rating,film.description,film.release_year
FROM film_actor
LEFT JOIN  film ON film_actor.film_id= film.film_id;

SELECT *
FROM film_actor
LEFT JOIN  film 
ON film_actor.film_id= film.film_id;



