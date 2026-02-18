package com.villarta.lab1.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponse {
    private final Long id;
    private final String firstname;
    private final String lastname;
    private final String email;
}
