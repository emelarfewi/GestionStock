package com.example.BackEnd.services;

import com.example.BackEnd.exceptions.UserNotFoundException;
import com.example.BackEnd.models.User;
import com.example.BackEnd.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userrepo) {
        this.userRepo = userrepo;
    }

    public User addUser (User user) {
        return userRepo.save(user);
    }
    public List<User> findAllUsers() {
       return userRepo.findAll() ;
    }

    public User updateUser (User user){
        return userRepo.save(user);
    }


    public List<User> findByEmail(String Email) {
        return userRepo.findUserByEmail(Email);
    }

    public User findByPwd(String Pwd) {
        return userRepo.findUserByPassword(Pwd);
    }

    public User findById(Long Id) {
        return userRepo.findUserById(Id);
    }

    public List<User> findByEmailPwd (String Email, String Pwd) {
        return userRepo.findUserByEmailAndPassword(Email, Pwd)
                .orElseThrow(() -> new UserNotFoundException("User by this email and password was not found!"));
    }


    public void deleteUser(Long Id) {
        userRepo.deleteUserById(Id);
    }
}
