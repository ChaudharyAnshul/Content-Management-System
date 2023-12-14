# CSYE6200 Final Project Group 18
# Content-Management-System


## Project Description:
We have worked on building a Content Management System for Students and Courses like Canvas. This application is build using Spring Boot Framework of Java for the backend and React on the frontend. This application allows users (professors and students) to login to the app using their email IDs and view their registered courses on the dashboard. It allows Professors to post Quizzes for courses and students to attempt those Quizzes. Admin holds special privileges to create user objects, courses and terms in the system.

Java Concepts Covered: 
1. Inheritance
2. Factory
3. Enum
5. CSV File Handling
6. Lambdas
7. Design patterns
8. Inner Classes
9. Exception handling
10. Generics


 
 
 
## Tech Stack
1. Spring Booot
2. React
3. Mongo DB
 
## IDLE/Editors
1. Intellij
2. VS Code
3. Mongo Compass
 
##  Repo Setup
Backend Setup (Spring-Boot app)
1. Clone the repo
2. Create .env file in resources from .envExample
3. Add db details in .env file
 
Add below DB details in .env file -
 
MONGO_DB = "CMS"
MONGO_USER = "Admin"
MONGO_PASSWORD = "iBKQl3XJEAAdwc6D"
MONGO_CLUSTER = "cluster0.ncbpgdx.mongodb.net"
 
 
4. build and run server
 
Frontend setup (React app)
1. run command - npm install
2. build and run UI

 
## Team members contributions towards project:
 
Anshul: Contributed on creating Quiz APIs, role-based authentication and some UI components
 
Narayani: User Factory (managed user objects), Admin can activate and deactivate user fuctionality, Quiz  UI
 
Kartik: Created Landing Page UI, TermController, TermService Forms for AdminDashBoard
 
Aaryan: Created Student Comparator and Created and styled user dashboard page and course page.  worked on frontend to create multiple pages
 
Kartikey: Created Admin Backend APIs for Creating Term, Students and Courses, contributed towaards some UI components as well.
 
Deepansh: Created FileReaderUtility for reading csv files and parsing them into objects
 
Jilson: Worked on creating Factories to create objects, contributed towaards some UI components as well.
