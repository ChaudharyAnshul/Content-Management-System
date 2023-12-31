package edu.neu.csye6200.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
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
    private User professor;
    @DocumentReference
    private List<User> students;
    private int maxCount;
    private int currentCount;

    public Course(String name, int number, Term term, User professor, int maxCount) {
        this.name = name;
        this.number = number;
        this.term = term;
        this.professor = professor;
        this.maxCount = maxCount;
        this.currentCount = 0;
        this.students =  new ArrayList<>();
    }



    public Course(String courseName, int courseID, Term objTerm, Professor objProfessor, List<User> courseStudents, int size, int currentCount) {
        this.name = courseName;
        this.number = courseID;
        this.term = objTerm;
        this.professor = objProfessor;
        this.students = courseStudents;
        this.maxCount = size;
        this.currentCount = currentCount;
    }
}
