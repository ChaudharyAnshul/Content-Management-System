package edu.neu.csye6200.repository;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.Quiz;
import edu.neu.csye6200.models.Term;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TermRepository extends MongoRepository<Term, ObjectId> {
    Term findByTermName(String termName);

}
