package edu.neu.csye6200.cms.models;


import edu.neu.csye6200.cms.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Document(collection = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    // Database attributes
    @Id
    private ObjectId id; 
    private String firstName;
    private String lastName;
    @Indexed(unique = true)
    private String email;
    private String password;
    private boolean isActive;
    private UserRole userRole;

    // Non Database attribute
    @Transient
    private final String SECRET_KEY = "PasswordIsForAll";

    public User(String firstName, String lastName, String email, String password, boolean isActive, UserRole userRole) throws Exception {

        checkEmailDomain(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = encryptPassword(password);
        this.isActive = isActive;
        this.userRole = userRole;
    }

    // encrypt password before storing
    public String encryptPassword(String password) throws Exception {
        Cipher cipher = Cipher.getInstance("AES");
        SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes(), "AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);

        byte[] encryptedBytes = cipher.doFinal(password.getBytes());
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    // check email domain
    public void checkEmailDomain(String email) throws Exception {
        String domain = "northeastern.edu";
        String incomingDomain = "";
        int atIndex = -1;
        if (!(email == null || email.isEmpty())) {
            atIndex = email.lastIndexOf('@');
        }
        if (atIndex != -1 && atIndex < email.length() - 1) {
            incomingDomain = email.substring(atIndex + 1);
        }

        if (!domain.equals(incomingDomain) ) {
            throw new Exception("cannot use email Domain other that " + domain );
        }

    }
}
