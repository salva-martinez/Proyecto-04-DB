# Proyecto-04-DB
BackEnd Videoclub

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

<br>

# Relación de modelos:

![modelos-relacionados](https://user-images.githubusercontent.com/114058655/205016527-a36f9a6c-9ad5-41fd-bdaf-e9ef9b089e18.png)


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

# Alquileres:

Préstamo de una película : petición POST loans que permite al usuario prestar una película o serie de la base de datos. 

Prestar un programa : petición POST loans que permite al usuario prestar un programa de la base de datos.
