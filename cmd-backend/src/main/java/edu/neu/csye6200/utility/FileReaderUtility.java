package edu.neu.csye6200.utility;

import edu.neu.csye6200.enums.ImportType;
import edu.neu.csye6200.enums.TermType;
import edu.neu.csye6200.enums.UserRole;
import edu.neu.csye6200.models.*;
import edu.neu.csye6200.repository.CourseRepository;
import edu.neu.csye6200.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class FileReaderUtility <T> {
    List<Student> studentList = new ArrayList<>();
    List<Course> courseList = new ArrayList<>();
    List<List<T>> listContainer = new ArrayList<>();

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    @Autowired
    public FileReaderUtility(UserRepository userRepository, CourseRepository courseRepository) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    ///Function to read CSV files for bulk import. Used to read student and course data
    public List<List<T>> ReadFile(ImportType importTypeEnum, File file) {

//        String StudentCSV = System.getProperty("user.dir")+"\\csv files\\student.csv";
//        String CoursesCSV = System.getProperty("user.dir")+"\\csv files\\courses.csv";

        //Student Reader logic. Straightforward read of student.csv file and create an object.
        FileReader studentFileReader;
        if(importTypeEnum == ImportType.Student) {
            try {
                studentFileReader = new FileReader(file);
                BufferedReader studentCSVReader = new BufferedReader(studentFileReader);
                String studentReader;
                while ((studentReader = studentCSVReader.readLine()) != null) {
                    String[] objCSVString = studentReader.split(",");
                    //int studentID = Integer.parseInt(objCSVString[0]);
                    String email = objCSVString[3];
                    User studentObject = userRepository.findByEmail(email);
                    int courseId = Integer.parseInt(objCSVString[5]);

                    Course course = courseRepository.findByNumber(courseId);

                    //IF THERE'S NO PREVIOUS ENTRY FOR A PARTICULAR EMAIL ID CREATE NEW OBJECT
                    if (studentObject == null) {
                        String firstName = objCSVString[1];
                        String lastName = objCSVString[2];
                        String password = objCSVString[4];
                        studentObject = new User(firstName, lastName, email, password, true, UserRole.STUDENT, course);
                    } else {
                        studentObject.addCourse(course);
                    }
                    studentList.add((Student) studentObject);
                }
                listContainer.add((List<T>) studentList);
            } catch (IOException e) {
                System.out.println("Error Occurred while parsing student list. Please check" + e.getMessage());
                //e.printStackTrace();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }

        }
//        else if(importTypeEnum == ImportType.Course) {
//            //Course reader logic. Needs a Term, Term Type, Professor and a filtered list of students for the particular course.
//            FileReader courseFileReader;
//            try {
////                courseFileReader = new FileReader(file);
////                BufferedReader courseCSVReader = new BufferedReader(courseFileReader);
////                String courseReader;
////                while ((courseReader = courseCSVReader.readLine()) != null) {
////                    try {
////                        String[] objCSVString = courseReader.split(",");
////                        //Course details such as name, UD
////                        String courseName = objCSVString[0];
////                        int courseID = Integer.parseInt(objCSVString[1]);
////
////                        //Created a professor object.
////                        User objProfessor = userRepository.findByEmail(objCSVString[6]);
////                        //IF THERE'S NO PREVIOUS ENTRY FOR A PARTICULAR EMAIL ID CREATE NEW OBJECT
////                        if(objProfessor == null)
////                        {
////                            String professorFirstName = objCSVString[4];
////                            String professorLastName = objCSVString[5];
////                            String professorEmail = objCSVString[6];
////                            String professorPassword = objCSVString[7];
////                            objProfessor = new Professor(professorFirstName, professorLastName, professorEmail, professorPassword);
////                        }
////
//////                        String professorFirstName = objCSVString[4];
//////                        String professorLastName = objCSVString[5];
//////                        String professorEmail = objCSVString[6];
//////                        String professorPassword = objCSVString[7];
//////                        User objProfessor = new Professor(professorFirstName, professorLastName, professorEmail, professorPassword);
////
////                        //Filtering above created student list to find only those who have this course ID
////                        List<Student> courseStudents = studentList.stream()
////                                .filter(x -> x.getCourses().contains(courseID))
////                                .collect(Collectors.toList());
////
////                        Course courseObject = new Course(courseName, courseID, objTerm, (Professor) objProfessor, courseStudents, courseStudents.size(), courseStudents.size());
////                        courseList.add(courseObject);
////
////                        listContainer.add((List<T>) courseList);
////                    } catch (Exception ex) {
////                        System.out.println("Exception occurred while creating course object and assigning to list - " + ex.getMessage());
////                    }
//                }
//            } catch (IOException e) {
//                System.out.println("Error Occurred while parsing person list. Please check");
//                //e.printStackTrace();
//            } catch (Exception e) {
//                throw new RuntimeException(e);
//            }
//        }
        else{
            return null;
        }
        return listContainer;
    }
}
