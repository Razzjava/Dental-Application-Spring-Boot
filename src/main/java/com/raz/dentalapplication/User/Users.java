package com.raz.dentalapplication.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
public class Users {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String address;
    private Integer dentistId;
    private String contactNumber;




}
