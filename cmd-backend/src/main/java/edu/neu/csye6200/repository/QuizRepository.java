package edu.neu.csye6200.repository;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.Quiz;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface QuizRepository extends MongoRepository<Quiz, ObjectId> {
    Quiz findByQuizNameAndCourse(String quizName, Course course);
    List<Quiz> findByCourse(Course course);
}
