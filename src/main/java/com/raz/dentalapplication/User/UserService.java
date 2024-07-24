package com.raz.dentalapplication.User;

import com.raz.dentalapplication.Dentist.Dentist;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.stream.Collectors;

public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
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

        User newUser = new User();

        if(user.dentistId() == null){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "no dentist id");
        } else {



            newUser.setName(user.name());
            newUser.setDentistId(user.dentistId());
            newUser.setAddress(user.address());
            newUser.setContactNumber(user.contactNumber());
            userRepository.save(newUser);
        }



    }


}
