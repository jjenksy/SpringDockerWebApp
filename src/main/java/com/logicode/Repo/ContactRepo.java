package com.logicode.Repo;

import com.logicode.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by jjenkins on 11/4/2016.
 */
@Repository
//@RepositoryRestResource(path="contact") //setup a path without a controller
public interface ContactRepo extends MongoRepository<Contact, String> {


}
