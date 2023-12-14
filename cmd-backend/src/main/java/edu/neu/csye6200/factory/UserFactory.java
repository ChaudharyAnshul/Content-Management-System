
package edu.neu.csye6200.factory;

import edu.neu.csye6200.models.Admin;
import edu.neu.csye6200.models.Professor;
import edu.neu.csye6200.models.Student;
import edu.neu.csye6200.repository.UserRepository;
import edu.neu.csye6200.models.User;

public enum UserFactory {

    ADMIN {
        @Override
        public User createUser(UserRepository userRepository,String fName, String lName, String email, String password) throws Exception {
            User admin = new Admin(fName, lName, email, password);
            userRepository.save(admin);
            return admin;
        }
    },
    PROFESSOR {
        @Override
        public User createUser(UserRepository userRepository,String fName, String lName, String email, String password) throws Exception {
            User professor = new Professor(fName, lName, email, password);
            userRepository.save(professor);
            return professor;
        }
    },
    STUDENT {
        @Override
        public User createUser(UserRepository userRepository,String fName, String lName, String email, String password) throws Exception {
            User student = new Student(fName, lName, email, password);
            userRepository.save(student);
            return student;
        }
    };
    public abstract User createUser(UserRepository userRepository, String fName, String lName, String email, String password) throws Exception;
}
