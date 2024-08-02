package com.raz.dentalapplication.Dentist;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DentalRepository extends JpaRepository<Dentist, Integer> {

   Optional<Dentist> findByEmailAddress(String EmailAddress);
}
