# FAQ

#### GitLab support multi-language?

Yes, you can change the language from the Admin Panel of GitLab

#### Where is the database connection configuration of GitLab?

Database configuration information in */etc/gitlab/gitlab.rb* in the [GitLab directory](/stack-components.md#gitlab)

#### Can I remote connect PostgreSQL?

No, Omnibus GitLab use the PostgreSQL Peer Authentication mode for local connection

#### If there is no domain name, can I deploy GitLab?

Yes, visit GitLab by *http://Internet IP*

#### What is the password for the database root user?

Omnibus GitLab use the PostgreSQL Peer Authentication mode for local connection, no username and pssword

#### Is there a web-base GUI database management tools?

No

#### Is it possible to modify the repository path of GitLab?

Yes, Refer to official docs [Repository Storage Paths](https://docs.gitlab.com/ee/administration/repository_storage_paths.html)

#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers