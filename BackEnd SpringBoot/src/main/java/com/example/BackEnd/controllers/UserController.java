package com.example.BackEnd.controllers;

import com.example.BackEnd.models.User;
import com.example.BackEnd.services.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:4200")

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/email={e}")
    public ResponseEntity<List<User>> getUserByEmail(@PathVariable("e") String email) {
        List<User> users = userService.findByEmail(email);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{e}&{p}")
    public ResponseEntity<List<User>> getUserByEmailPwd(@PathVariable("e") String email, @PathVariable("p") String password) {
        List<User> users = userService.findByEmailPwd(email, password);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }


    @PutMapping("/id/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable("id") Long id, @RequestBody User user) {
        User updatedUser = userService.findById(id);
        updatedUser.setNom(user.getNom());
        updatedUser.setPrenom(user.getPrenom());
        updatedUser.setEmail(user.getEmail());
        User savedUser = userService.updateUser(updatedUser);
        return new ResponseEntity<>(savedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
