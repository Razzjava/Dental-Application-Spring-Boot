package com.raz.dentalapplication.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<Users, Integer> {



    List<Users> findAllByDentistIdEquals(Integer dentistId);

}
