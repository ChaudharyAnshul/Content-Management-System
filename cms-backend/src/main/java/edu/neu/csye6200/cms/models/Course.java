package edu.neu.csye6200.cms.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "course")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
    @Id
    private ObjectId id;
    private String name;
    @Indexed(unique = true)
    private int number;
    @DocumentReference
    private Term term;
    @DocumentReference
    private Professor professor;
    @DocumentReference
    private List<Student> students;
    private int maxCount;
    private int currentCount;
}
