#sportsHub
**The Files are in the Master Branch**

**SportsHub Documentation**

**Requirements**
1. Mysql, node js
2. Visual studio
3. Make sure NPM Installed
**Database Setup:**

1. Create all the necessary tables and insert the values.
2. We will provide the sample databases’ Tables and values we have in our system.
3. Create all the tables in your system using MySQL.

**Codebase and Configuration:**
1. Obtain the latest codebase for the SportsHub project from the GitHub link we provide. 2. Get both front-end and back-end codes.
4. In the backend code -> server.js file ensure the database connection with that to your credentials and names.
Configure Database connection:
const mysql = require('mysql'); const connection = mysql.createConnection({ host: 'hostname', database: 'Databasename', user: 'username', password: 'your password' });
-> Make sure to replace the database name and password with your own in your system.
-> Then run ‘node server.js’ in the Terminal
5. Then Get the react code and open the terminal at that directory.
-> run ‘npm start’
6. Make sure you open two different terminals and run the above commands.
7. If you have done everything correctly then you can see our page rendering on your web browser.
