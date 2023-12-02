package edu.neu.csye6200.cms.models;

import edu.neu.csye6200.cms.enums.UserRole;

public class Student extends User{

    private int courseId;

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public Student(String firstName, String lastName, String email, String password) throws Exception {
        super(firstName, lastName, email, password, true, UserRole.STUDENT);
    }
    public Student(String firstName, String lastName, String email, String password, int courseID) throws Exception {
        super(firstName, lastName, email, password,true, UserRole.STUDENT);
        this.setCourseId(courseID);
    }

}
