package edu.neu.csye6200.cms.Utilities;

import edu.neu.csye6200.cms.models.Professor;
import edu.neu.csye6200.cms.models.Student;
import edu.neu.csye6200.cms.models.User;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FileReaderUtility {
    List<User> studentList = new ArrayList<>();
    List<User> professorList = new ArrayList<>();
    List<List<User>> listContainer = new ArrayList<>();

    public List<List<User>> ReadFile() {

        String StudentCSV = System.getProperty("user.dir")+"\\csv files\\student.csv";
        String PersonCSV = System.getProperty("user.dir")+"\\csv files\\professor.csv";

        System.out.println(System.getProperty("user.dir"));
        FileReader fileReader;
        try {
            fileReader = new FileReader(StudentCSV);
            BufferedReader csvReader = new BufferedReader(fileReader);
            String reader;
            while ((reader = csvReader.readLine()) != null)
            {
                String[] objCSVString = reader.split(",");
                //int studentID = Integer.parseInt(objCSVString[0]);
                String firstName = objCSVString[1];
                String lastName = objCSVString[2];
                String email = objCSVString[3];
                String password = objCSVString[4];
                int courseId = Integer.parseInt(objCSVString[5]);
                User studentObject = new Student(firstName, lastName, email, password, courseId);
                studentList.add(studentObject);
            }
        } catch (IOException e) {
            System.out.println("Error Occurred while parsing student list. Please check");
            //e.printStackTrace();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        FileReader fileReader2;
        try {
            fileReader2 = new FileReader(PersonCSV);
            BufferedReader csvReader2 = new BufferedReader(fileReader2);
            String reader2;
            while ((reader2 = csvReader2.readLine()) != null)
            {
                String[] objCSVString = reader2.split(",");
                String professorFirstName = objCSVString[1];
                String professorLastName = objCSVString[2];
                String professorEmail = objCSVString[3];
                String professorPassword = objCSVString[4];
                User professorObject = new Professor(professorFirstName, professorLastName, professorEmail, professorPassword);
                professorList.add(professorObject);
            }
        } catch (IOException e) {
            System.out.println("Error Occurred while parsing person list. Please check");
            //e.printStackTrace();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        listContainer.add(professorList);
        listContainer.add(studentList);
        return listContainer;
    }
}
