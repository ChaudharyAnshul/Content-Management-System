
package edu.neu.csye6200.cms.factory;

import edu.neu.csye6200.cms.models.User;
import edu.neu.csye6200.cms.service.UserService;


public enum UserFactory {

    ADMIN {
        @Override
        public User createUser(UserService userService,String fName, String lName, String email, String password) throws Exception {
            return userService.CreateAdminUser(fName, lName, email, password);
        }
    },
    PROFESSOR {
        @Override
        public User createUser(UserService userService,String fName, String lName, String email, String password) throws Exception {
            return userService.CreateProfessor(fName, lName, email, password);
        }
    },
    STUDENT {
        @Override
        public User createUser(UserService userService,String fName, String lName, String email, String password) throws Exception {
            return userService.CreateStudent(fName, lName, email, password);
        }
    };
    public abstract User createUser(UserService userService,String fName, String lName, String email, String password) throws Exception;
}
