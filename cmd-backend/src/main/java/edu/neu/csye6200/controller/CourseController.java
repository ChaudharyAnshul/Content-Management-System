package edu.neu.csye6200.controller;

import edu.neu.csye6200.enums.UserRole;
import edu.neu.csye6200.models.*;
import edu.neu.csye6200.repository.CourseRepository;
import edu.neu.csye6200.repository.TermRepository;
import edu.neu.csye6200.service.CourseService;
import edu.neu.csye6200.repository.UserRepository;
import edu.neu.csye6200.request.CourseRequest;
import edu.neu.csye6200.utility.MultipartUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    private final CourseService CourseService;
    private final UserRepository userRepository;
    private final TermRepository termRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    public CourseController(CourseService CourseService, UserRepository userRepository, TermRepository termRepository) {
        this.CourseService = CourseService;
        this.userRepository = userRepository;
        this.termRepository = termRepository;
    }

    // API call to create a course object
    @PostMapping("/create-course")
    public ResponseEntity<String> addCourse(@RequestBody CourseRequest courseRequest) {
        try {
            String courseName = courseRequest.getCourseName();
            int courseNumber = courseRequest.getCourseNumber();
            String termName = courseRequest.getTerm();
            String professorEmail = courseRequest.getProfessorEmail();
            int maxCount = courseRequest.getMaxCount();
            System.out.println(courseName + " " + courseNumber + " " + termName + " " + professorEmail + " " + maxCount);
            System.out.println("TermName: " + termName);

            Term term = termRepository.findByTermName(termName);
            if(term == null){
                return new ResponseEntity<>("Entered term is invalid!", HttpStatus.BAD_REQUEST);
            }

            User professor = userRepository.findByEmail(professorEmail);

            if(professor == null || !professor.getUserRole().equals(UserRole.PROFESSOR) ){
                return new ResponseEntity<>("User has no permission to perform the action", HttpStatus.BAD_REQUEST);
            }

            Course course = CourseService.createCourse(courseName, courseNumber, term, professor, maxCount);

            CourseService.saveCourse(course);

            return new ResponseEntity<>("Course Saved", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    // API To Populate a created course with a list of students
    @PostMapping("/create-course/{courseNumber}")
    public ResponseEntity<String> generateStudentListFromEmails(@PathVariable int courseNumber, @ModelAttribute MultipartFile csvFile) {
        try {
            List<String> studentList = MultipartUtil.parseEmailsToStudentList(csvFile);
            // TODO: convert this string studentList to a List<Student> which contains existing students
            List<User> studentsInCourse = new ArrayList<>();
            for(String s : studentList) {
                // find each email in DB, get its student object and add it to studentsInCourse list
               User student = userRepository.findByEmail(s);
               if(student != null) studentsInCourse.add(student);
            }
            // TODO: Get course object by courseNumber
            Course course = courseRepository.findByNumber(courseNumber);
            // TODO: Set this student list to the respective course
            if(course != null){
                course.setStudents(studentsInCourse);
            }
            CourseService.saveCourse(course);
            return new ResponseEntity<>("Students Added to course successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);
        }
    }

    @GetMapping("/getCourse")
    public ResponseEntity<List<Course>> getAllCourse(){
        return new ResponseEntity<List<Course>>(courseRepository.findAll(), HttpStatus.OK);
    }
}
