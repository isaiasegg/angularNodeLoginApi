# AngularNodeApiLogin

Requerimientos:
- Node Js
- Angular CLI ( npm install @angular/cli -g )

Instrucciones:
- npm install nodemon -g
- npm install
- Agregar el url hacia tu base de datos. Para esto puedes crear una cuenta gratis en mLab, crear una base de datos y seguir los pasos. Al finalizar te va a quedar un url con tu usuario y contraseña a la base de datos, este debes agregarlo dentro de un archivo .env que crees dentro de el root del repo.
    - Deberia quedar algo como esto: MONGODB_URI=(el url hacia tu base de datos)

- Para levantar el servidor: nodemon
- Para levantar el cliente: ng serve --proxy-config pc.json

# [Subir repo a heroku](https://devcenter.heroku.com/articles/git)

NOTA: si subes el repo a heroku tendrás que agregar la variable de ambiente tambien. Ve a tu aplicación en Heroku y en la seccion settings > Reveal Config Var, puedes agregar la variable que tienes en tu archivo .env

Espero les sirva! ✌️✌️
 