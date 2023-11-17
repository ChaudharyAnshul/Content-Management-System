package edu.neu.csye6200.cms.repository;

import edu.neu.csye6200.cms.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByEmailAndPassword(String email, String password);
}
