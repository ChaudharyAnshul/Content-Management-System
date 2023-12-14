package edu.neu.csye6200.models;

import edu.neu.csye6200.enums.UserRole;

public class Admin extends User{
    public Admin(String firstName, String lastName, String email, String password) throws Exception {
        super(firstName, lastName, email, password, true, UserRole.ADMIN);
    }
}
