package edu.neu.csye6200.factory;

import edu.neu.csye6200.models.*;

import java.util.List;

public class CourseFactory {
    private static final CourseFactory factoryInstance = new CourseFactory();

    // private constructor
    private CourseFactory(){}

    public static CourseFactory getInstance(){
        return factoryInstance;
    }

    public Course createCourse(String name, int number, Term term, User professor, int maxCount) {
        return new Course(name, number, term, professor, maxCount);
    }
}
