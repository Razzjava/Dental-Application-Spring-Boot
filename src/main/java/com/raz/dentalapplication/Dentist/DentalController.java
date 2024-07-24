package com.raz.dentalapplication.Dentist;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@RestController
public class DentalController {


    @GetMapping(value = "/alldentist")
    public List<Dentist> getAllDentists() {
        return null;


    }
}
