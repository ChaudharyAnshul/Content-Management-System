package edu.neu.csye6200.service;

import edu.neu.csye6200.factory.QuizFactory;
import edu.neu.csye6200.models.Course;
import edu.neu.csye6200.models.Quiz;
import edu.neu.csye6200.models.QuizQuestion;
import edu.neu.csye6200.repository.QuizQuestionRepository;
import edu.neu.csye6200.repository.QuizRepository;
import edu.neu.csye6200.request.QuizQuestionsRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    private final QuizRepository quizRepository;
    private final QuizQuestionRepository quizQuestionRepository;


    @Autowired
    public QuizService(QuizRepository quizRepository, QuizQuestionRepository quizQuestionRepository) {
        this.quizRepository = quizRepository;
        this.quizQuestionRepository = quizQuestionRepository;
    }

    public Quiz createQuiz(String quizName, Course course, Boolean isActive){
        QuizFactory quizFactory = QuizFactory.getInstance();
        return quizFactory.createQuiz(quizName, course, isActive);
    }

    public void saveQuiz(Quiz quiz){
        quizRepository.save(quiz);
    }

    public Quiz CreateQuestion(Quiz quiz, QuizQuestionsRequest quizQuestionsRequest) throws Exception{
        String question = quizQuestionsRequest.getQuestion();
        String questionType = quizQuestionsRequest.getQuestionType();
        List<String> quizOptions = quizQuestionsRequest.getQuizOptions();
        String correctAnswer = quizQuestionsRequest.getCorrectAnswer();
        double point = Double.parseDouble(quizQuestionsRequest.getPoint());

        QuizQuestion quizQuestion = new QuizQuestion(question, questionType, quizOptions, correctAnswer, quiz, point);
        quizQuestionRepository.save(quizQuestion);

        quiz.addQuestion(quizQuestion);

        return quiz;
    }


    public List<Quiz> getQuiz (Course course) {
        List<Quiz> quizs = quizRepository.findByCourse(course);
        return quizs;
    }
}
