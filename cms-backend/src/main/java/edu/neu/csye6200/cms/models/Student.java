package edu.neu.csye6200.cms.models;

import edu.neu.csye6200.cms.enums.UserRole;

public class Student extends User{

    public Student(String firstName, String lastName, String email, String password) throws Exception {
        super(firstName, lastName, email, password, true, UserRole.STUDENT);
    }

}
