package edu.neu.csye6200.cms.controller;

import edu.neu.csye6200.cms.models.User;
import edu.neu.csye6200.cms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    // Login and Register Start

    @PostMapping ("/login")
    public ResponseEntity<Optional<User>> login(@RequestBody Map<String,String> payload){
        try{
            User user = userService.CheckUserLogin(payload.get("email"), payload.get("password"));
            return new ResponseEntity<>(Optional.ofNullable(user), HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(Optional.empty(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping ("/register")
    public ResponseEntity<String> register(@RequestBody Map<String,String> payload){
        try{
            User student = userService.CreateStudent(payload.get("firstName"), payload.get("lastName"), payload.get("email"), payload.get("password"));
            String msg = "New Student Created with email " + student.getEmail();
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Login and Register End


    // Admin User Functions List Start

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

    // Admin User Functions List End


    // User Function Start

    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
    }

    // User Function End


    // Backdoor Function Start

    @PostMapping("/backdoor/createNewAdmin")
    public ResponseEntity<String> backdoorCreateNewAdmin(@RequestBody Map<String,String> payload){
        try{
            User admin = userService.CreateAdminUser(payload.get("firstName"), payload.get("lastName"), payload.get("email"), payload.get("password"));
            String msg = "New Admin Created with email " + admin.getEmail();
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Backdoor Function End

}
