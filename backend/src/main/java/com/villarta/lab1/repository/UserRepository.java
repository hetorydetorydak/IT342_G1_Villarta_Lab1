package com.villarta.lab1.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.villarta.lab1.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}
