package com.logicode.Repo;

import com.logicode.model.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by jjenkins on 11/9/2016.
 */
public interface BlogRepo extends MongoRepository<Blog, String> {
}
