package edu.neu.csye6200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "quiz")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Quiz {
    @Id
    private ObjectId id;
    private String quizName;

    @DocumentReference
    @JsonIgnore
    private Course course;
    @DocumentReference
    private List<QuizQuestion> quizQuestions;
    @DocumentReference
    private List<QuizScore> quizScores;
    private Boolean isActive;

    public Quiz(String quizName, Course course, Boolean isActive) {
        this.quizName = quizName;
        this.course = course;
        this.isActive = isActive;
        this.quizQuestions = new ArrayList<>();
        this.quizScores = new ArrayList<>();
    }

    public void addQuestion(QuizQuestion quizQuestion){
        this.quizQuestions.add(quizQuestion);
    }

    public void addScores(QuizScore quizScores){
        this.quizScores.add(quizScores);
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                ", quizName='" + quizName + '\'' +
                '}';
    }
}
