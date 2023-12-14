package edu.neu.csye6200.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "question-answer")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionAnswer {
    @Id
    private ObjectId id;
    private String response;
    @DocumentReference
    private Student student;
}
