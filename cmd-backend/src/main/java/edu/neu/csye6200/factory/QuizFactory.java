package edu.neu.csye6200.factory;

import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.Quiz;

// Quiz Singleton Factory
public class QuizFactory {

    private static final QuizFactory factoryInstance = new QuizFactory();

    // private constructor
    private QuizFactory(){}

    public static QuizFactory getInstance(){
        return factoryInstance;
    }

    public Quiz createQuiz(String quizName, Course course, Boolean isActive) {
        return new Quiz(quizName, course, isActive);
    }
}
