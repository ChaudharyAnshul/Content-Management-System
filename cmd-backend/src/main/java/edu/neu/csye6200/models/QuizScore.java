package edu.neu.csye6200.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "quiz-score")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizScore {
    @Id
    private ObjectId id;
    private double score;
    @DocumentReference
    private Student student;
}
