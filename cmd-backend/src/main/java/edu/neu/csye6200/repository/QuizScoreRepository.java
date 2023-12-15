package edu.neu.csye6200.repository;

import edu.neu.csye6200.models.QuizScore;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizScoreRepository extends MongoRepository<QuizScore, ObjectId> {
}
