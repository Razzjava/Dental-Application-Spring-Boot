package com.raz.dentalapplication.User;

import com.raz.dentalapplication.Dentist.DentalService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private DentalService dentalService;

    public UserService(UserRepository userRepository, DentalService dentalService){
        this.userRepository = userRepository;
        this.dentalService = dentalService;
    }

    public List<UserDTO> getUsersByDentalID(Integer id){
        List<UserDTO> allUsers = userRepository.findAllByDentistIdEquals(id).stream().map(
                user -> new UserDTO(
                        user.getId(),
                        user.getName(),
                        user.getAddress(),
                        user.getDentistId(),
                        user.getContactNumber()
                )
        ).collect(Collectors.toList());

        return allUsers;

    }

    public void registerUser(UserDTO user){

        Users newUser = new Users();

        if(user.dentistId() == null){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "no dentist id");
        } else {



            newUser.setName(user.name());
            newUser.setDentistId(user.dentistId());
            newUser.setAddress(user.address());
            newUser.setContactNumber(user.contactNumber());
            userRepository.save(newUser);

            dentalService.updateRemainingSpaces(user.dentistId());
        }



    }


}
