For the application to work the steps detailed below needs to be followed:

Set up:
1. install git
2. install node.js(newest version or version 12.16.3 and later is recommended)
3. Install XAMPP
4. Open XAMPP and start apache and mySQL
5. Create a new database and name it "way_in"
6. While inside the database press import and import the way_in.sql located in the way_in folder	
7. place the folder "way_in_db" inside xampp/hotdocs(eg: C:\xampp\htdocs )
8. open the bash command line and navigate to the way-in folder
9. run "npm install"
10. run "Npm start" to start the application

if there are any errors while running "npm start" it might be necessary to delete the node_module folder and run "npm install" before starting the application again.

In order for the information to be collected from the local database 'localhost' may have to be replaced by your local ip adress in these files:
Components/pages/busApplyBachPage.js line 96
Components/pages/busApplyIntPage.js line 94
Components/pages/studIntApplyPage.js line 20
Components/intForm.js line 75
Components/studBachForm.js line 84