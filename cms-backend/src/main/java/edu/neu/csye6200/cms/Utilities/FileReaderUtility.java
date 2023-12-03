package edu.neu.csye6200.cms.Utilities;

import edu.neu.csye6200.cms.enums.TermType;
import edu.neu.csye6200.cms.models.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class FileReaderUtility <T> {
    List<Student> studentList = new ArrayList<>();
    List<Course> courseList = new ArrayList<>();
    List<List<T>> listContainer = new ArrayList<>();

    ///Function to read CSV files for bulk import. Used to read student and course data
    public List<List<T>> ReadFile() {

        String StudentCSV = System.getProperty("user.dir")+"\\csv files\\student.csv";
        String CoursesCSV = System.getProperty("user.dir")+"\\csv files\\courses.csv";

        //Student Reader logic. Straightforward read of student.csv file and create an object.
        FileReader studentFileReader;
        try {
            studentFileReader = new FileReader(StudentCSV);
            BufferedReader studentCSVReader = new BufferedReader(studentFileReader);
            String studentReader;
            while ((studentReader = studentCSVReader.readLine()) != null)
            {
                String[] objCSVString = studentReader.split(",");
                //int studentID = Integer.parseInt(objCSVString[0]);
                String firstName = objCSVString[1];
                String lastName = objCSVString[2];
                String email = objCSVString[3];
                String password = objCSVString[4];
                int courseId = Integer.parseInt(objCSVString[5]);
                User studentObject = new Student(firstName, lastName, email, password, courseId);
                studentList.add((Student) studentObject);
            }
        } catch (IOException e) {
            System.out.println("Error Occurred while parsing student list. Please check");
            //e.printStackTrace();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //Course reader logic. Needs a Term, Term Type, Professor and a filtered list of students for the particular course.
        FileReader courseFileReader;
        try {
            courseFileReader = new FileReader(CoursesCSV);
            BufferedReader courseCSVReader = new BufferedReader(courseFileReader);
            String courseReader;
            while ((courseReader = courseCSVReader.readLine()) != null)
            {
                try {
                    String[] objCSVString = courseReader.split(",");
                    //Course details such as name, UD
                    String courseName = objCSVString[0];
                    int courseID = Integer.parseInt(objCSVString[1]);

                    //Course term details. Created a Term object and mapped the CSV value to an ENUM
                    String termName = objCSVString[2];
                    TermType termType = TermType.valueOf(objCSVString[3].toUpperCase());
                    Term objTerm = new Term(termName, termType);

                    //Created a professor object.
                    String professorFirstName = objCSVString[4];
                    String professorLastName = objCSVString[5];
                    String professorEmail = objCSVString[6];
                    String professorPassword = objCSVString[7];
                    User objProfessor = new Professor(professorFirstName, professorLastName, professorEmail, professorPassword);

                    //Filtering above created student list to find only those who have this course ID
                    List<Student> courseStudents = studentList.stream()
                            .filter(x -> x.getCourseId() == courseID)
                            .collect(Collectors.toList());

                    Course courseObject = new Course(courseName, courseID, objTerm, (Professor) objProfessor, courseStudents, courseStudents.size(), courseStudents.size());
                    courseList.add(courseObject);
                }
                catch (Exception ex){
                    System.out.println("Exception occured while creating course object and assigning to list - " + ex.getMessage());
                }
            }
        } catch (IOException e) {
            System.out.println("Error Occurred while parsing person list. Please check");
            //e.printStackTrace();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        listContainer.add((List<T>) courseList);
        listContainer.add((List<T>) studentList);
        return listContainer;
    }
}
