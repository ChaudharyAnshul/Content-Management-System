package edu.neu.csye6200.repository;

import edu.neu.csye6200.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByEmailAndPassword(String email, String password);
    User findByEmail(String email);
}
