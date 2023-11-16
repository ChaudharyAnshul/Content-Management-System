package edu.neu.csye6200.cms.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping ("/login")
    public ResponseEntity<String> login(){
        return new ResponseEntity<String>("Welcome Login!!!", HttpStatus.OK);
    }

    @PostMapping ("/register")
    public ResponseEntity<String> register(){
        return new ResponseEntity<String>("Welcome Register!!!", HttpStatus.OK);
    }


    @PostMapping ("/admin/register")
    public ResponseEntity<String> adminRegister(){
        return new ResponseEntity<String>("Welcome Admin Register!!!", HttpStatus.OK);
    }

    @PostMapping ("/admin/updateRole")
    public ResponseEntity<String> adminUpdateRole(){
        return new ResponseEntity<String>("Welcome Admin Update Role!!!", HttpStatus.OK);
    }

    @PostMapping ("/admin/disableUser")
    public ResponseEntity<String> adminDisableUser(){
        return new ResponseEntity<String>("Welcome Admin Disable User!!!", HttpStatus.OK);
    }

}
