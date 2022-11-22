# Proyecto-04-DB
Base de datos Videoclub

Creamos el backend de una aplicación videoclub online.

Utilizare las tecnologias Node con Express junto con Sequelize.

Para ello descargaremos los siguientes paquetes:


  -axios
  
  -bcrypt
  
  -colors
  
  -cors
  
  -dotenv
  
  -express
  
  -jsonwebtoken
  
  -morgan
  
  -mysql2
  
  -nodemon
  
  -sequelize y sequelize-cli
  
  -winston
 

# LISTA DE COMANDOS

Instalamos las dependencias con el gestor de paquetes (Node Package Manager) mediante este comando:
-npm i

Creamos por comando la base de datos en Railway:
-sequelize db:create

Migramos las tablas a nuestra base de datos por comando:
-sequelize db:migrate

Generamos las seeders(Son los datos que van en las tablas) por comando:
-sequelize db:seed:all

Para deshacer las migraciones:
-sequelize db:migrate:undo

# END POINTS

# Register:
POST - localhost:3000/api/signup - { "name": "root", "email": "root@email.com", "password": "password" }

# Login:
POST - localhost:3000/api/signin - { "email": "root@email.com", "password": "password" }

# Home:
GET - localhost:3000

# Peliculas:
GET - localhost:3000/movies
GET - localhost:3000/movies/:id
GET - localhost:3000/movies/name/:title
POST - localhost:3000/movies
PUT - localhost:3000/movies:id
DELETE - localhost:3000/movies
DELETE - localhost:3000/movies:id

# Series:
GET - localhost:3000/shows
GET - localhost:3000/shows/:id
GET - localhost:3000/shows/name/:title
POST - localhost:3000/shows
PUT - localhost:3000/shows:id
DELETE - localhost:3000/shows
DELETE - localhost:3000/shows:id

# Genero:
GET - localhost:3000/categories
GET - localhost:3000/categories/:id
GET - localhost:3000/categories/name/:title
POST - localhost:3000/categories
PUT - localhost:3000/categories:id
DELETE - localhost:3000/categories
DELETE - localhost:3000/categories:id

# Usuarios:
GET - localhost:3000/users
GET - localhost:3000/users/:id
GET - localhost:3000/users/name/:title
POST - localhost:3000/users
PUT - localhost:3000/users:id
DELETE - localhost:3000/users
DELETE - localhost:3000/users:id