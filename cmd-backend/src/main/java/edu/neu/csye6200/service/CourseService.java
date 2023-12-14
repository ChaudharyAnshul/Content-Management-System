package edu.neu.csye6200.service;

import edu.neu.csye6200.factory.CourseFactory;
import edu.neu.csye6200.models.*;
import edu.neu.csye6200.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }


    public Course createCourse(String name, int number, Term term, User professor, int maxCount){
        CourseFactory courseFactory = CourseFactory.getInstance();
        return courseFactory.createCourse(name, number, term, professor, maxCount);
    }

    public void saveCourse(Course course){
        courseRepository.save(course);
    }
}
