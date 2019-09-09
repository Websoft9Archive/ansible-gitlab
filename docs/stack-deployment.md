# Deployment

**Deployment is to copy the GitLab pre-packaged online to your Cloud Server**. For example, after the user subscribe GitLab on the Cloud Platform, the Platform will automatically copy the GitLab to the corresponding Cloud Server.

- If GitLab has been deployed, go to [Initial Installation](/zh/stack-installation.md) to complete the operation.
- If GitLab is not deployed, you need to deploy GitLab to your cloud server first.

We offer two deployment GitLab scenarios (the deployment results are the same):

## Deploy by Image

**Deploy by Image** means starting instance from GitLab images. **GitLab Image** provide OS and software environment needed for GitLab.

For users with experience with cloud servers, Deploy by Image equated with "one-click deployment".

Websoft9 published [GitLab image](https://apps.websoft9.com/metabase) on Cloud Platform, three methods for your deployment:

* When **Create New Instance** , select the GitLab image as the system boot template.
* When **Subscribe GitLab** on Marketplace, the system will promote you to create a new instance for this image at the same time.
* When **Re-install OS** for you instance, you can replace the existing image with a GitLab image.

## Deploy by Script

**Deploy by Script** means running a script on your cloud instance to pull the pre-packages online to your instance and configure it at the same time.

Websoft9 provide the [GitLab ansbile automation script](https://github.com/Websoft9/ansible-metabase) on Github. If you are familiar with Ansible, you can deploy the GitLab to the instance automaticly.

## Comparison

Although the results of the **deploy by image** are consistent with the results of **deploy by script**, what is the difference between the two deployment methods?

Suggest you read the document [Deploy by Image vs Deploy by Script](https://support.websoft9.com/docs/faq/bz-product.html#deployment-comparison)