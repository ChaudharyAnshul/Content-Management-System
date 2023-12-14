package edu.neu.csye6200.repository;

import edu.neu.csye6200.models.Course;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course, ObjectId> {
    Course findByNumber(int number);
}
