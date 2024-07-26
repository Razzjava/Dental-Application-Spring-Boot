package com.raz.dentalapplication.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UserController {

    private UserService userService;

    @PostMapping("/createuser")
    public void createUser(@RequestBody UserDTO user){
        userService.registerUser(user);


    }


}
