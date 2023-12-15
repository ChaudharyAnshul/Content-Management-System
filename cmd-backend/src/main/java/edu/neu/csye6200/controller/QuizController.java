package edu.neu.csye6200.controller;

import edu.neu.csye6200.models.*;
import edu.neu.csye6200.repository.CourseRepository;
import edu.neu.csye6200.repository.QuizRepository;
import edu.neu.csye6200.repository.QuizScoreRepository;
import edu.neu.csye6200.repository.UserRepository;
import edu.neu.csye6200.request.QuizQuestionsRequest;
import edu.neu.csye6200.request.QuizRequest;
import edu.neu.csye6200.service.QuizService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    private final QuizService quizService;
    private final CourseRepository courseRepository;
    private final QuizRepository quizRepository;
    private final UserRepository userRepository;
    private final QuizScoreRepository quizScoreRepository;

    @Autowired
    public QuizController(QuizService quizService, CourseRepository courseRepository, QuizRepository quizRepository, UserRepository userRepository, QuizScoreRepository quizScoreRepository) {
        this.quizService = quizService;
        this.courseRepository = courseRepository;
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;
        this.quizScoreRepository = quizScoreRepository;
    }

    @PostMapping("/create-quiz")
    public ResponseEntity<String> createQuiz(@RequestBody QuizRequest quizRequest){
        try{
            String quizName = quizRequest.getQuizName();
            int courseNumber = quizRequest.getCourseNumber();
            boolean isActive = quizRequest.getIsActive();

            Course course = courseRepository.findByNumber(courseNumber);

            Quiz quiz = quizService.createQuiz(quizName, course, isActive);

            quizService.saveQuiz(quiz);

            for (QuizQuestionsRequest i : quizRequest.getQuizQuestionsRequest()) {
                quiz = quizService.CreateQuestion(quiz, i);
            }

            quizService.saveQuiz(quiz);

            return new ResponseEntity<>("Quiz Saved", HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/get-quiz")
    public ResponseEntity<List<Quiz>> getQuiz(@RequestBody Map<String,String> payload){
        int number = Integer.parseInt(payload.get("courseNumber"));
        Course course = courseRepository.findByNumber(number);
        List<Quiz> quizs = quizService.getQuiz(course);
        List<Quiz> quizList = new ArrayList<>();
        for (Quiz quiz : quizs) {
            quiz.setCourse(null);
            quiz.setObjId(String.valueOf(quiz.getId()));
            quizList.add(quiz);
        }

        ResponseEntity<List<Quiz>> a = new ResponseEntity<List<Quiz>>(quizList, HttpStatus.OK);
        return a;
    }


    @PostMapping("/submit-quiz")
    public ResponseEntity<String> submitQuiz(@RequestBody Map<String,String> payload){
        int score = Integer.parseInt(payload.get("score"));
        String id = payload.get("id");
        String email = payload.get("email");

        ObjectId objectId = new ObjectId(id);


        User student = userRepository.findByEmail(email);

        QuizScore quizScore = new QuizScore((double) score, student);

        quizScoreRepository.save(quizScore);

        Quiz quiz;
        Optional<Quiz> quizOpt = quizRepository.findById(objectId);
        if (quizOpt.isPresent()) {
            quiz = quizOpt.get();
            quiz.addScores(quizScore);
            quizRepository.save(quiz);
        }

        return new ResponseEntity<String>("Quiz Saved", HttpStatus.OK);
    }
}
