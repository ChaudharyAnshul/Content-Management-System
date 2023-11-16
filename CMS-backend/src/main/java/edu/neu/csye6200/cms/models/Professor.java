package edu.neu.csye6200.cms.models;

public class Professor extends User{
    public Professor(String fName,String lName,String email,String password) {
        super(fName, lName, email, password, true, false, false, true);
    }
}
