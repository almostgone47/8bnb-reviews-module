-- run mysql -u student -p < schema.sql to migrate schema with student password also

DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

USE reviews;

CREATE TABLE review(
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(50),
  image VARCHAR(255),
  body VARCHAR(255),
  clean_rating INT,
  social_rating INT,
  comfort_rating INT,
  location_rating INT,
  service_rating INT,
  sleep_rating INT,
  host_id INT,
  created_at DATETIME NOT NULL,
  PRIMARY KEY(id)
);
