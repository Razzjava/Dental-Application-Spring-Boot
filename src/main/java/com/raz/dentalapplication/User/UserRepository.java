package com.raz.dentalapplication.User;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {



    List<User> findAllByDentistIdEquals(Integer dentistId);

}
