package com.logicode.controller;

import com.logicode.Repo.BlogRepo;
import com.logicode.model.Blog;
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
    private BlogRepo blogRepo;
    /**
     * This method Return a List of all the Contacts in the MongoDB
     * It passes in the Contact as a generic inforccing the typespec
     * @return
     */
    @RequestMapping(method= RequestMethod.GET)
    public List<Blog> getAll() {
        System.out.println("Get request recieved!!");
        //returns the list from the repo
        return blogRepo.findAll();
    }


    /**
     * THis method post a new contact to the database
     * @param blog
     * @return
     */
    @RequestMapping(method=RequestMethod.POST)
    public Blog create(@RequestBody Blog blog) {
        //returns the status of the save
        System.out.println(blog);
        return blogRepo.save(blog);
    }


    //delete based on ID
    @RequestMapping(method=RequestMethod.DELETE, value="{id}")
    public void delete(@PathVariable String id) {
        blogRepo.delete(id);
    }

    // update based on ID and string data
    @RequestMapping(method=RequestMethod.PUT, value="{id}")
    public Blog update(@PathVariable String id, @RequestBody Blog blog) {
        Blog update = blogRepo.findOne(id);
        update.setAuthor(blog.getAuthor());
        update.setDescription(blog.getDescription());
        //returns the status of the save
        return blogRepo.save(update);
    }
}
