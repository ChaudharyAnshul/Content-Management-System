package edu.neu.csye6200.request;

import edu.neu.csye6200.models.Quiz;
import lombok.Data;


import java.util.List;

@Data
public class QuizQuestionsRequest {
    private String question;
    private String questionType;
    private List<String> quizOptions;
    private String correctAnswer;
    private String point;
}
