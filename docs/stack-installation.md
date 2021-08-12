# Initial Installation

If you have completed the GitLab deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for GitLab

## GitLab Installation Wizard

1. Using local Chrome or Firefox to visit the URL *http://domain name* or *http://Internet IP*, you will enter the register interface of GitLab
  ![GitLab reset password](https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-createpw-websoft9.png)

2. Log in GitLab(username is `root`) 
   ![GitLab login](https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-login-websoft9.png)

3. Go to GitLab dashboard to start use it 
   ![GitLab dashboard](https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-backend-websoft9.png)

4. Go to GitLab Admin Area to configure it
   ![GitLab admin area](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-adminpanel-websoft9.png)

5. Open: **User Settings** > **Preferences** to set your language
   ![GitLab language](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-setlanguage-websoft9.png)

6. Open: **User Settings** > **SSH key** to set your keys
   ![GitLab SSH key](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-sshkey-websoft9.png)

7. If you have installed GitLab-EE, go to 【Admin Area】>【License】, import your license or try it
   ![Gitlab license](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlabee-license-websoft9.png)

> More useful GitLab guide, please refer to [GitLab Documentation](https://docs.gitlab.com/omnibus/README.html)


## GitLab Setup Wizard

Now, we will give use sample How to conduct project management, team management, authority management, and code management by Gitlab by  your practice

1. Domain binding, the complete real path needs to be used in the subsequent project management. After Gitlab is installed, the default domain name is http://gitlab.example.com, you need to modify it to your existing domain name in the configuration file, or modify it to IP to access http://IP. Reference[Domain binding](http://support.websoft9.com/docs/gitlab/solution-more.html#domain-binding)。

2. Project management: The administrator creates a new project, initializes the project, adds a development branch "dev", and does not open the master branch master to developers

   Create project: Websoft9-Site1 
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-add-project-websoft9.png)
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-add-project1-websoft9.png)

   Initialize the project, add README.md and index.html pages, and submit
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-add-file-websoft9.png)

   New development branch dev
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-add-branch-websoft9.png)
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-create-branch-websoft9.png)

3. Member management: team members register an account on the login page. The administrator activates users in the system, and then invites users among project members and configures permissions. The user must be activated to log in to the system.

   User registration
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-register-websoft9.png)

   Administrator activates registered users
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-user-manager1-websoft9.png)

   The administrator invites users to join the project group and assigns rights
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-add-member-websoft9.png)

4. Code management:
   Project members are responsible for the development of the "index.html" page, through git clone the project to the local, development in vs code.
   Use the "Git Base" and clone the project locally via "git clone"
  
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-clone-websoft9.png)

   Use vs code to edit index.html locally, and then submit the local code to the server.
   Log in to gitlab with your development account, view updates and create a merge request

   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-pull-request-websoft9.png)
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-merge-request-websoft9.png)
   
   Administrator login Gitlab merge request

   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-merge-websoft9.png)
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-merge1-websoft9.png)
   ![gitlab](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-merge2-websoft9.png)



## Q&A

#### I can't visit the start page of GitLab?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this GitLab use?

PostgreSQL

#### Sometimes 502 error when running?

GitLab need at leaset 4G free memory, If the memory is less than 4, there will be a 502 error.

#### GitLab first installation or restart, need wait for one minute?

For a single-core CPU server, the Unicorn and Sidekiq service starts up to one minute.
