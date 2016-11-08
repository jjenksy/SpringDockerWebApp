package com.logicode.controller;

import com.logicode.Repo.ContactRepo;
import com.logicode.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by jjenkins on 11/4/2016.
 */

@RestController
@RequestMapping(value = "/api/blog")
public class BlogController {

    @Autowired
    private ContactRepo contactRepo;
    /**
     * This method Return a List of all the Contacts in the MongoDB
     * It passes in the Contact as a generic inforccing the typespec
     * @return
     */
    @RequestMapping(method= RequestMethod.GET)
    public List<Contact> getAll() {
        System.out.println("Get request recieved!!");
        //returns the list from the repo
        return contactRepo.findAll();
    }


    /**
     * THis method post a new contact to the database
     * @param contact
     * @return
     */
    @RequestMapping(method=RequestMethod.POST)
    public Contact create(@RequestBody Contact contact) {
        //returns the status of the save
        System.out.println(contact);
        return contactRepo.save(contact);
    }


    //delete based on ID
    @RequestMapping(method=RequestMethod.DELETE, value="{id}")
    public void delete(@PathVariable String id) {
        contactRepo.delete(id);
    }

    // update based on ID and string data
    @RequestMapping(method=RequestMethod.PUT, value="{id}")
    public Contact update(@PathVariable String id, @RequestBody Contact contact) {
        Contact update = contactRepo.findOne(id);
        update.setAddress(contact.getAddress());
        update.setEmail(contact.getEmail());
        update.setFacebookProfile(contact.getFacebookProfile());
        update.setFirstName(contact.getFirstName());
        update.setGooglePlusProfile(contact.getGooglePlusProfile());
        update.setLastName(contact.getLastName());
        update.setLinkedInProfile(contact.getLinkedInProfile());
        update.setPhoneNumber(contact.getPhoneNumber());
        update.setTwitterHandle(contact.getTwitterHandle());

        //returns the status of the save
        return contactRepo.save(update);
    }
}
