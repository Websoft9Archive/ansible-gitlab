# Update & Upgrade

Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.

You should know the differences between the terms **Update** and **Upgrade**([Extended reading](https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade))
- Operating system patching is **Update**, Ubuntu16.04 to Ubuntu18.04 is **Upgrade**
- MySQL5.6.25 to MySQL5.6.30 is **Update**, MySQL5.6 to MySQL5.7 is **Upgrade**

For GitLab maintenance, focus on the following two Update & Upgrade jobs

- Sytem update(Operating System and Running Environment) 
- GitLab upgrade 

## System Update

Run an update command to complete the system update:

``` shell
#For Ubuntu
apt update && apt upgrade -y

#For Centos&Redhat
yum update -y
```
> This deployment package is preconfigured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron

## GitLab Upgrade

GitLab officially provides **level by level**[upgrade plan](https://docs.gitlab.com/omnibus/update/README.html#updating-using-the-official-repositories), each version has an upgrade The path must be gradually upgraded to the **specified version**, the method is as follows:

### Specify version upgrade

The update method of updating to a specified version is very useful. On the one hand, it meets the requirements of a specific version of the user, and on the other hand, it achieves a **gradual upgrade** in this way, which solves the situation that the version span is too large to be upgraded.

For example: Gitlab12 to GitLab14 cannot be upgraded directly, you need to refer to the official step-by-step [upgrade path](https://docs.gitlab.com/ee/update/index.html#upgrade-paths) to achieve this. 

Take the Gitlab 13.0.14 to GitLab 14.1.6 as sample for your reference below:    

1. Get the **upgrade paths** from [official docs](https://docs.gitlab.com/ee/update/index.html#upgrade-paths), computing your correct path like this:  
   ```
   13.0.14 -> 13.1.11 -> 13.8.8 -> 13.12.10 -> 13.12.12 -> 14.0.11 -> 14.1.6
   ```

2. Optional step: search all versions in GitLab repository (ce can be instead to ee)
   ```
   # Ubuntu/Debian
   sudo apt-cache madison gitlab-ce

   # RHEL/CentOS 6 and 7
   yum --showduplicates list gitlab-ce

   # RHEL/CentOS 8
   dnf --showduplicates list gitlab-ce
   ```

3. Update step by step
   ```
   # Ubuntu/Debian
   sudo apt install gitlab-ce-<version>

   # RHEL/CentOS 6 and 7
   yum install gitlab-ce-<version>

   # RHEL/CentOS 8
   dnf install gitlab-ce-<version>
   ```

> If you update by `yum install gitlab-ce` which not include version, it mean update to latest version

## CE to EE

To upgrade an existing GitLab Community Edition (CE) server to GitLab Enterprise Edition (EE), all you have to do is install the EE package on top of CE. 

1. Get the CE version nubmer
   ```
   # For Debian/Ubuntu
   sudo apt-cache policy gitlab-ce | grep Installed

   # For CentOS/RHEL
   sudo rpm -q gitlab-ce
   ```
2. Match the EE version number.e.g. the CE number is *8.6.7-ce.0*, then the EE number should be *8.6.7-ee.0*
3. Add the gitlab-ee Apt or Yum repository
   ```
   # For Debian/Ubuntu
   curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash

   # For CentOS/RHEL
   curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
   ```
4. Install the correct GitLab-EE version(system will automatically uninstall CE version the same time)
   ```
   ........................................
   # For Debian/Ubuntu
   ........................................
   ## Make sure the repositories are up-to-date
   sudo apt-get update

   ## Install the package using the version you wrote down from step 1
   sudo apt-get install gitlab-ee=8.6.7-ee.0

   ## Reconfigure GitLab
   sudo gitlab-ctl reconfigure
   
   ........................................
   # For CentOS/RHEL
   ........................................
   ## Install the package using the version you wrote down from step 1
   sudo yum install gitlab-ee-8.6.7-ee.0.el7.x86_64

   ## Reconfigure GitLab
   sudo gitlab-ctl reconfigure
   ```
5. Go to the GitLab admin panel of your server (/admin/license/new) and upload your license file.
6. After you confirm that GitLab is working as expected, you may remove the old Community Edition repository:
   ```
   # For Debian/Ubuntu
   sudo rm /etc/apt/sources.list.d/gitlab_gitlab-ce.list

   # For CentOS/RHEL
   sudo rm /etc/yum.repos.d/gitlab_gitlab-ce.repo
   ```
More details about CE upgrade to EE, please refer to official docs: [Updating Community Edition to Enterprise Edition](https://docs.gitlab.com/omnibus/update/README.html#updating-community-edition-to-enterprise-edition)
