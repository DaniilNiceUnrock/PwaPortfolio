linux x64
sudo systemctl start mongod  // запуск бызы
yarn add -S express morgan mongoose
npm i cors
node server/server.js


/*
NodeJS | Supported node-sass version | Node Module
Node 16     6.0+                        93
Node 15     5.0+                        88
Node 14     4.14+                       83
Node 13     4.13+, <5.0                 79
Node 12     4.12+                       72
Node 11     4.10+, <5.0                 67
Node 10     4.9+, <6.0                  64
Node 8      4.5.3+, <5.0                57
Node <8     <5.0                        <57
*/

pm2 status # Статус процессов
pm2 logs # Показать логи приложения (Ctrl + C чтобы выйти)
pm2 startup ubuntu # Запускать pm2 при рестарте системы
pm2 save # Сохранить процесс чтобы при перезапуске сам запускался