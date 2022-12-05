**README**
The name of the project which we will be doing is Testing and Test Automation of Infrastructure as Code (e.g. Testing of Terraform code)

Procedure:
The people at Gruntworks have developed a new tool called Terratest. The goal is to make Terraform code testable by using a unit testing framework. They chose to use Go’s unit testing framework (they could have picked anything) then developed Go libraries that performed common tasks like SSH-ing into a machine.
To run a test you need to provide a Terraform file and a Go test. Then you simply call go test and Terratest takes care of initing and applying your infrastructure. It performs some tests then destroys. Of course, this isn’t magic. This process is encoded in the Go test file. But it serves as a neat repeatable pattern to test infrastructure.
An example:
First we need to define our infrastructure in Terraform code. This contains all the usual stuff and the examples typically use AWS resources, but any cloud provider should work.


**References**
https://medium.com/contino-engineering/terraform-infrastructure-as-code-testing-best-practice-unit-tests-bdd-end-to-end-scenario-c30d5a6921d
