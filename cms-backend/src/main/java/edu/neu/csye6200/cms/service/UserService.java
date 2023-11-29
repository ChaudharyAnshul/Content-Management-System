package edu.neu.csye6200.cms.service;

import edu.neu.csye6200.cms.models.Admin;
import edu.neu.csye6200.cms.models.Professor;
import edu.neu.csye6200.cms.models.Student;
import edu.neu.csye6200.cms.models.User;
import edu.neu.csye6200.cms.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> allUsers(){
        return userRepository.findAll();
    }

    public User CreateAdminUser(String fName, String lName, String email, String password) throws Exception{
        User admin = new Admin(fName, lName, email, password);
        userRepository.save(admin);
        return admin;
    }

    public User CreateStudent(String fName, String lName, String email, String password) throws Exception{
        User student = new Student(fName, lName, email, password);
        userRepository.save(student);
        return student;
    }
    public User CreateProfessor(String fName, String lName, String email, String password) throws Exception{
        User professor = new Professor(fName, lName, email, password);
        userRepository.save(professor);
        return professor;
    }

    public User CheckUserLogin(String email, String password) throws Exception{
        User user = new User();
        String encryptPassword = user.encryptPassword(password);
        return userRepository.findByEmailAndPassword(email, encryptPassword);
    }

}
