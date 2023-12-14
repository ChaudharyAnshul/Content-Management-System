package edu.neu.csye6200.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "quiz-question")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizQuestion{
        @Id
        private ObjectId id;
        private String question;
        private String questionType;
        private List<String> quizOptions;
        private String correctAnswer;
        @DocumentReference
        private Quiz quiz;
        private double point;

        public QuizQuestion(String question, String questionType, List<String> quizOptions, String correctAnswer, Quiz quiz, double point) {
                this.question = question;
                this.questionType = questionType;
                this.quizOptions = quizOptions;
                this.correctAnswer = correctAnswer;
                this.quiz = null;
                this.point = point;
        }
}
