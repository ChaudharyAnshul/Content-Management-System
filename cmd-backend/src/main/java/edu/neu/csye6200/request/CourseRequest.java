package edu.neu.csye6200.request;

import edu.neu.csye6200.models.Professor;
import edu.neu.csye6200.models.Term;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CourseRequest {
    //private MultipartFile file;
    private String courseName;
    private int courseNumber;
    private String term;
    private String professorEmail;
    private int maxCount;
}

