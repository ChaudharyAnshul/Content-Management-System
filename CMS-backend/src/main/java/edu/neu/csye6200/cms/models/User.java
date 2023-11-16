package edu.neu.csye6200.cms.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id; 
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private boolean isActive;
    private boolean isAdmin;
    private boolean isProfessor;
    private boolean isStudent;

    public User(String firstName, String lastName, String email, String password, boolean isActive, boolean isAdmin, boolean isProfessor, boolean isStudent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.isAdmin = isAdmin;
        this.isProfessor = isProfessor;
        this.isStudent = isStudent;
    }
}
