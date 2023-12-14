package edu.neu.csye6200.repository;

import edu.neu.csye6200.models.QuizQuestion;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizQuestionRepository extends MongoRepository<QuizQuestion, ObjectId>{
    QuizQuestion findByQuestion(String question);
}
