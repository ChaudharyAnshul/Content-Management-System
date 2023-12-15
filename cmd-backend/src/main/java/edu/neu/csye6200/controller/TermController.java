package edu.neu.csye6200.controller;

import edu.neu.csye6200.enums.TermType;
import edu.neu.csye6200.models.Term;
import edu.neu.csye6200.repository.TermRepository;
import edu.neu.csye6200.request.TermRequest;
import edu.neu.csye6200.service.TermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/term")
public class TermController {

    @Autowired
    private TermService termService;

    @Autowired
    private TermRepository termRepository;

    // TODO: function to create a term object and save it to MongoDB
    @PostMapping("/create-term")
    public ResponseEntity<String> addTerm(@RequestBody TermRequest termRequest) {
        try {
            String termName = termRequest.getTermName();
            String termType = termRequest.getTermType().name();
            // create term object
            Term term = termService.createTerm(termName, termType);
            // save object to mongoDB
            termService.saveTerm(term);
            return new ResponseEntity<>("Term Saved to DB", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{termName}")
    public Term getTermByName(@PathVariable String termName) {
        return termRepository.findByTermName(termName);
    }

    @GetMapping("/all")
    public List<Term> getAllTerms() {
        return termRepository.findAll();
    }

}
