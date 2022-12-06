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

Detail of STEPS:
1- Define a steady state for the infrastructure that will be experimented on. This will include instrumenting components with application performance management (APM) tools like SignalFx, infrastructure monitoring tools like Prometheus and Grafana, and log consolidation and analysis tools like Splunk Enterprise.

2- Now, cause actual real-world failures at a reasonable rate – look for single points of failure and performance bottlenecks. Going through previous incidents and looking for trends and types of incidents to cause is a solid place to start.

3- Take random combinations of failures like servers offline, killing application instances or introducing failures and lag at the network layer. Maybe individually there won't be any effect but together they might cause unknown problems

4- All activities should be performed in an experimental group, with a control group left as a comparison point.

5- Compare your steady-state metrics to those you gather after injecting the disturbance into your system. If you find differences in the measurements, your chaos engineering experiment has succeeded.


**References**
1. https://orangematter.solarwinds.com/2022/08/18/what-is-chaos-engineering/#:~:text=Chaos%20engineering%20was%20pioneered%20at,server%20or%20data%20center%20failure.

2. https://principlesofchaos.org
