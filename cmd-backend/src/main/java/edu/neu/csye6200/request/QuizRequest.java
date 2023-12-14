package edu.neu.csye6200.request;

import edu.neu.csye6200.models.QuizQuestion;
import lombok.Data;

import java.util.List;

@Data
public class QuizRequest {
    private String quizName;
    private int courseNumber;
    private List<QuizQuestionsRequest> quizQuestionsRequest;
    private Boolean isActive;
}
