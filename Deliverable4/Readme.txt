**README**
System Reliablitiy testing using Chaos Engineering


Definition: Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system’s capability to withstand turbulent conditions in production.

Background: 
Netflix allowed chaos engineering to take root. Netflix was finding many bugs and edge cases. Netflix started a service called "Chaps Monkey". In the real world, disruptions happen at random time e.g., server gets down. Chaos Monkey randomly broke off Virtual Machine containers or instances when the code is still in production.
This helped cater the above mentioned problem so there won't be issues in the actual application. In this way, netflix team started to build more fault tolerant solutions. Chaos Monkey ensured reliability. 

In 2012, netflix made this service open source. In 2014, Netflix started the term Chaos engineering, which basically meant to avoid affecting other systems when some system fails to run. Hence, avoiding single point of failure.

Prnciples:

Chaos engineering has 2 main principles:
1. Single point of failure should not exist in a system.
2. Don't assume system is completely free of single point failure. Ensure using an effective way.

Steps:

Some steps that are involved in Chaos Engineering are:
1. Define a steady state that shows normal behaviour of the system.
2. Selected state must be stable in all environments
3. Include disruptive scenarios like servers crashing, network failure, etc
4. Test in production environment
5. Monitor and repeat


**References**
1. https://orangematter.solarwinds.com/2022/08/18/what-is-chaos-engineering/#:~:text=Chaos%20engineering%20was%20pioneered%20at,server%20or%20data%20center%20failure.

2. https://principlesofchaos.org
