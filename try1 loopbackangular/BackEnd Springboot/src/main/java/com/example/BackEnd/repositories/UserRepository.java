package com.example.BackEnd.repositories;

import com.example.BackEnd.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    void deleteUserById(Long id);
    List<User> findUserByEmail(String email);
    User findUserByPassword(String password);
    User findUserById(Long id);

    Optional<List<User>> findUserByEmailAndPassword (String email, String password);
}
