package com.raz.dentalapplication.Dentist;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class DentalService {

    private final DentalRepository dentalRepository;

    public DentalService(DentalRepository dentalRepository){
        this.dentalRepository = dentalRepository;
    }

    public List<DentistDTO> getAllDentist(){
        return dentalRepository.findAll().stream().map(
                dentist -> new DentistDTO(
                        dentist.getId(),
                        dentist.getCompanyName(),
                        dentist.getAddress(),
                        dentist.getCity(),
                        dentist.getNumOfSpaces()

                )
        )
        .collect(Collectors.toList());

    }

    // creating dentists

    public void createNewDentist(DentistDTO dentist){

        Dentist newDentist  = new Dentist();

        if (dentist.numOfSpaces() == null){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "missing spaces available");
        } else{
            newDentist.setCity(dentist.city());
            newDentist.setAddress(dentist.address());
            newDentist.setCompanyName(dentist.companyName());
            newDentist.setNumOfSpaces(dentist.numOfSpaces());

            dentalRepository.save(newDentist);
        }

    }

    // update count of remaining spaces when creating user

    public void updateRemainingSpaces(Integer id){

        Optional<Dentist> updateDentist = dentalRepository.findById(id);

        updateDentist.isPresent(instance -> {
            instance.setNumOfSpaces(0);

        });


    }



}
