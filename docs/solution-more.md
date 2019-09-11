# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

The precondition for binding a domain is that GitLab can accessed by domain name.

Nonetheless, from the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

GitLab domain name binding steps:

1. Connect your Cloud Server
2. Modify [GitLab configuration file](/zh/stack-components.md#gitlab): */etc/gitlab/gitlab.rb*, change the **external_url**'s value *http://gitlab.example.com** to your domain name
   ```text
   external_url "http://gitlab.example.com" # 改为自定义域名
   ...
   ```
3. Save it and restart Service
   ```
   sudo gitlab-ctl reconfigure
   ```

## Other

Coming soon
