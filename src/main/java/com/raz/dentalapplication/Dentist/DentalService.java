package com.raz.dentalapplication.Dentist;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
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
                        dentist.getNumOfSpaces(),
                        dentist.getEmailAddress(),
                        dentist.getPassword()

                )
        )
        .collect(Collectors.toList());

    }

    // creating dentists

    public void createNewDentist(DentistDTO dentist){

        Dentist newDentist  = new Dentist();

        if (dentist.numOfSpaces() == null){
            System.out.println(dentist);
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "missing spaces available");
        } else{
            newDentist.setCity(dentist.city());
            newDentist.setAddress(dentist.address());
            newDentist.setCompanyName(dentist.companyName());
            newDentist.setNumOfSpaces(dentist.numOfSpaces());
            newDentist.setEmailAddress(dentist.emailAddress());

            dentalRepository.save(newDentist);
        }

    }

    // update count of remaining spaces when creating user

    public void updateRemainingSpaces(Integer id){

        Optional<Dentist> updateDentist = dentalRepository.findById(id);
        int remainingSpaces = updateDentist.map(Dentist::getNumOfSpaces).orElse(0);

        if(remainingSpaces > 0 ){
            remainingSpaces -= 1;
            int finalRemainingSpaces = remainingSpaces;
            updateDentist.ifPresent(dentist -> {
                dentist.setNumOfSpaces(finalRemainingSpaces);
                dentalRepository.save(dentist);
            });
        }



    }



}
