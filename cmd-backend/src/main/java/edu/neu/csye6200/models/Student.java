package edu.neu.csye6200.models;

import edu.neu.csye6200.enums.UserRole;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

public class Student extends User{

//    @DocumentReference
//    private List<Integer> courseID;

    public Student(String firstName, String lastName, String email, String password) throws Exception {
        super(firstName, lastName, email, password, true, UserRole.STUDENT);
    }


//    public Student(String firstName, String lastName, String email, String password, int courseID) throws Exception {
//        super(firstName, lastName, email, password, true, UserRole.STUDENT);
//        this.setCourseID(courseID);
//    }

//    public List<Integer> getCourseId() {
//        return this.courseID;
//    }
//
//    public void setCourseID(int courseID) {
//        this.courseID.add(courseID);
//    }
}
