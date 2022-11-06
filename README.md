# Group16-Software-Testing
Semester Project for software testing

**Assignment 2**

Submitted to: Mr. Jawaad Cheema

**Team Members:**

| Sr.no | Name   | Roll number | Section | 
|-------|--------|-------------|---------|
|   1   | Hammad Rashid | 19L-1007    |   7A    |
|   2   | Zarin Taufique  | 19L-1029    |   7A    |

### Task 3
***
We selected the project elasticsearch and will be looking at its framework along with it its UI and API components.

```
<dependency>
   <groupId>org.elasticsearch</groupId>
   <artifactId>elasticsearch</artifactId>
   <version>2.1.0</version>
</dependency>
```
The code mentioned above was written by the coders and added in the pom.xml file for testing purposes. API testing is done using JUnit and elasticsearch test framework. Node ann indices are made using elasticsearch classes. The main classes for testing are ESTestcase and ESTokenStrameTestcase. ESIntechTestcase is used for integration testing. ESIntechTestcase.client() is used for getting a random a client. Some other methods to access the client can be accessed by ESIntechTestcase.internalcluster() method. For example masterclient(), nonmasterclient(), and clientnodeClient(). 

In order to test the code with every possible data, the class randomizetest is used. It offers several methods. 

In order to check for assertions, elasticsearchassertions and elasticsearchgeoassertions classes are used.  

##### Elasticsearch testing framework
End points can be accessed as follows:
```
Elasticsearch: https://localhost:9200
Kibana: https://localhost:5601
User: elastic
Password: changeme
```
