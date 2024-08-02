package com.raz.dentalapplication.Dentist;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Data
@Entity
public class Dentist implements UserDetails {

    @Id
    @GeneratedValue
    private Integer id;
    private String companyName;
    private String emailAddress;
    private String address;
    private String city;
    private Integer numOfSpaces;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    public Dentist(Integer id, String companyName, String address, String city, Integer numOfSpaces, String emailAddress, String password) {
        this.id = id;
        this.companyName = companyName;
        this.address = address;
        this.city = city;
        this.numOfSpaces = numOfSpaces;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }



    @Override
    public String getUsername() {
        return emailAddress;
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }



    public Dentist(){}


}
