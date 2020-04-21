var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reviews'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

const seedData = (num) => {
  for (let i = 1; i < num; i++) {
    connection.query(`INSERT INTO review (author, image, body, clean_rating, social_rating, comfort_rating, location_rating, service_rating, sleep_rating, host_id, created_at) VALUES ('${faker.name.findName()}', '${faker.image.avatar()}', '${faker.lorem.sentence()}', '${faker.random.number({min: 1, max: 10})}', '${faker.random.number({min: 1, max: 10})}', '${faker.random.number({min: 1, max: 10})}', '${faker.random.number({min: 1, max: 10})}', '${faker.random.number({min: 1, max: 10})}', '${faker.random.number({min: 1, max: 10})}', 1, '2017-08-02');`, (err, data) => {
      if (err) {
        console.log('SEEDING: ', err);
      } else {
        console.log('DB successfully seeded!');
      }
    });
  }
};
seedData(100);