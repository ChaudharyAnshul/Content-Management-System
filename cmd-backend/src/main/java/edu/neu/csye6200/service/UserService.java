package edu.neu.csye6200.service;

import edu.neu.csye6200.enums.UserRole;
import edu.neu.csye6200.factory.UserFactory;
import edu.neu.csye6200.models.Admin;
import edu.neu.csye6200.models.Professor;
import edu.neu.csye6200.models.Student;
import edu.neu.csye6200.models.User;
import edu.neu.csye6200.repository.UserRepository;
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

    public User createAdminUser(String fName, String lName, String email, String password) throws Exception{
        return UserFactory.ADMIN.createUser(userRepository,fName, lName, email, password);
    }

    public User createStudent(String fName, String lName, String email, String password) throws Exception{
        return UserFactory.STUDENT.createUser(userRepository,fName, lName, email, password);
    }

    public User CreateProfessor(String fName, String lName, String email, String password) throws Exception{
        return UserFactory.PROFESSOR.createUser(userRepository,fName, lName, email, password);
    }
  
    public User checkUserLogin(String email, String password) throws Exception{
        User user = new User();
        String encryptPassword = user.encryptPassword(password);
        return userRepository.findByEmailAndPassword(email, encryptPassword);
    }

    public boolean activateUser(String adminEmail, String userEmail) throws Exception{
        User admin = userRepository.findByEmail(adminEmail);
        if(admin.getUserRole() == UserRole.ADMIN){
            User user = userRepository.findByEmail(userEmail);
            user.setActive(true);
            return true;
        } else {
            return false;
        }
    }

    public boolean deactivateUser(String adminEmail, String userEmail) throws Exception{
        User admin = userRepository.findByEmail(adminEmail);
        if(admin.getUserRole() == UserRole.ADMIN){
            User user = userRepository.findByEmail(userEmail);
            user.setActive(false);
            return true;
        } else {
            return false;
        }
    }

    public void createBulkUsers(List<? extends User> userList) {
        for(User u : userList){
            try{
                userRepository.save(u);
            } catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
    }

}
