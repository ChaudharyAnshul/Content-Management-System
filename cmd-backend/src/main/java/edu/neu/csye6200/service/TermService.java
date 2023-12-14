package edu.neu.csye6200.service;

import edu.neu.csye6200.enums.TermType;
import edu.neu.csye6200.models.Term;
import edu.neu.csye6200.repository.TermRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TermService {

    @Autowired
    private TermRepository termRepository;

    public Term createTerm(String termName, TermType termType) {
        return new Term(termName, termType);
    }

    public void saveTerm(Term term) {
        termRepository.save(term);
    }
}
