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

## Q&A

#### I can't visit the start page of GitLab?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this GitLab use?

PostgreSQL

#### Sometimes 502 error when running?

GitLab need at leaset 4G free memory, If the memory is less than 4, there will be a 502 error.

#### GitLab first installation or restart, need wait for one minute?

For a single-core CPU server, the Unicorn and Sidekiq service starts up to one minute.