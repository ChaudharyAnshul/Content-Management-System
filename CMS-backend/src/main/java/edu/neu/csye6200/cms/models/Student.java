package edu.neu.csye6200.cms.models;

public class Student extends User{

    public Student(String fName,String lName,String email,String password){
        super(fName, lName, email, password, true, false, false, true);
    }

}
