package edu.neu.csye6200.cms.models;

import edu.neu.csye6200.cms.enums.UserRole;

public class Professor extends User{
    public Professor(String firstName, String lastName, String email, String password) throws Exception {
        super(firstName, lastName, email, password, true, UserRole.PROFESSOR);
    }
}
