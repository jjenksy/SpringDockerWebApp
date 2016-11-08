package com.logicode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class LogicodeBlogApplication extends WebMvcConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(LogicodeBlogApplication.class, args);
	}


	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
//		addViewControllers() method (overriding the method of the same name in WebMvcConfigurerAdapter
		registry.addViewController("/").setViewName("index");

	}

}
