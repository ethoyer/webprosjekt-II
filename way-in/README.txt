For the application to work the steps detailed below needs to be followed:

Set up:
1. install git
2. install node.js(newest version is recommended)
3. Install XAMPP
4. Open XAMPP and start apache and mySQL
5. Create a new database and name it "way_in"
6. While inside the database press import and import the way_in.sql located in the "way_in" folder	
7. place the folder "way_in_db" inside xampp/hotdocs(eg: C:\xampp\htdocs )
8. open the bash command line and navigate to the "way_in" folder
9. run "npm install"
10. run "Npm start" to start the application

if there are any errors while running "npm start" it might be necessary to delete the node_module folder and run "npm install" before starting the application again.

In order for the information to be collected from the local database 'localhost' may have to be replaced by your local ip address in these files:
PostData.js line 2
Components/pages/companyBachPage.js line 94
Components/pages/companyInternshipPage.js line 92
Components/pages/studBachPage.js line 14
Components/pages/studInternshipPage.js line 14
Components/CoordinatorInfo.js line 47, 51, 58 and 62
Components/createUser.js line 44
Components/internshipForm.js line 74
Components/studBachForm.js line 81

The application comes with 1 coordinator user already registered:
username: paulj
password: 12345

The "log in" link is located inside the pop-up footer on the bottom of the screen, the register user link is on the log in page.

For IMT3851 Programming for Web II the relevant .php files are inside the new_in_db folder.
When a form is sent in it is added to the database and then displayed on the coordinator’s page behind the log-in. The coordinator only has one page with all 4 types of applications displayed(company suggest internship / bachelor project and student applies to internship / bachelor project). 
In order to send in an application as a company the company id needs to already exist within the database. Company id 1-5 can be used to test the form. 
