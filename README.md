# Videoclub-API
Backend para el proyecto de un videoclub online 

El primer paso para arrancar el proyecto es clonar este repositorio en su repositorio local.

A continuación, debemos instalar las dependencias no incluidas en el repositorio al utilizar el archivo .gitignore. Para ello, debemos introducir en el terminal el siguiente comando:

npm i
Inicializamos Sequelize con el siguiente comando:

sequelize init
Realizamos la migración de los modelos a la base de datos local.

sequelize db:migrate
Levantamos el servidor para acceder al endpoint de clonar peliculas desde Postman.

npm run dev
Para correr en la base de datos

Me quedaria realizar el CRUD de las diferentes tablas.

modelo:
![Captura de pantalla 2022-11-06 194247 base de datos,](https://user-images.githubusercontent.com/114058655/200189349-d8c0d291-7cf6-406f-8813-0150b186e40f.png)
