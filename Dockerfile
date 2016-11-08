#version of java
FROM java:8
#setup the port
EXPOSE 8080
#add the target location of the jar file
ADD /target/LogicodeBlogApplication.jar LogicodeBlogApplication.jar
#add the entry point for the application
ENTRYPOINT ["java","-jar","/LogicodeBlogApplication.jar"]