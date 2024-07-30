package com.raz.dentalapplication.Dentist;

import com.raz.dentalapplication.User.UserDTO;
import com.raz.dentalapplication.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class DentalController {

    private final UserService userService;
    private final DentalService dentalService;

    @Autowired
    public DentalController( UserService userService, DentalService dentalService ){
        this.userService = userService;
        this.dentalService = dentalService;
    }


    @GetMapping(value = "/alldentist")
    public List<DentistDTO> getAllDentists() {
        List<DentistDTO> allDentists = dentalService.getAllDentist();

        return allDentists;


    }

    @PostMapping(value = "/createdentist")
    public void createDentist(@RequestBody DentistDTO dentist){
        dentalService.createNewDentist(dentist);

    }


    @GetMapping(value="/getUsers")
    public List<UserDTO>  getUsersRegistered(Integer id){

        List<UserDTO> allUsers = userService.getUsersByDentalID(id);

        return allUsers;

    }

}
