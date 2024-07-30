package com.raz.dentalapplication.User;

public record UserDTO(

        Integer id,
        String name,
        String address,
        Integer dentistId,
        String contactNumber
) {
}
