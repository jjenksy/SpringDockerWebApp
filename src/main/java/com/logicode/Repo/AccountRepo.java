package com.logicode.Repo;

import com.logicode.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by jjenkins on 11/4/2016.
 */
public interface AccountRepo extends MongoRepository<Account, String> {

    /**
     * As you can see our repository is very simple.
     * In order to look up a user account we have added a method called findByUsername to our repository interface.
     * This method will perform a query on our collection to find an Account by their username.
     * We are taking advantage of a little Spring Data magic here because we don’t actually have to provide an implementation for this method.
     * Spring Data uses the method name to create the query and implementation of the method for us.
     * @param username
     * @return
     */
    public Account findByUsername(String username);
}
