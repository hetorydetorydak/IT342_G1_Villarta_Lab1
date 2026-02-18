package com.villarta.lab1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villarta.lab1.dto.UserResponse;
import com.villarta.lab1.repository.UserRepository;
import com.villarta.lab1.security.JwtProvider;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    @GetMapping("/me")
    public UserResponse me(@RequestHeader("Authorization") String auth) {
        String token = auth.replace("Bearer ", "");
        String email = jwtProvider.getEmailFromToken(token);

        var user = userRepository.findByEmail(email).orElseThrow();

        return new UserResponse(
                user.getId(),
                user.getFirstname(),
                user.getLastname(),
                user.getEmail()
        );
    }
}
