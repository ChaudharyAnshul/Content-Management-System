package edu.neu.csye6200.cms.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CMSController {

    @GetMapping("/home")
    public ResponseEntity<String> home(){
        return new ResponseEntity<String>("Welcome Home!!!", HttpStatus.OK);
    }
}
