# 参数

本Gitlab采用 [Omnibus Gitlab包](https://gitlab.com/gitlab-org/omnibus-gitlab) 的安装方式。Omnibus GitLab 是官方推荐的一种安装方法，它自带了 Gitlab 所需的所有组件和服务，并可以省去繁琐的配置，同时它自带 CLI 工具，便于 GitLab 升级和维护。

## 架构

下面是一个简化的架构图，可用于了解GitLab的架构。

![](http://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/architecture_simplified.png)

## 组件和版本

GitLab 包含数十种组件([查看](https://docs.gitlab.com/ee/development/architecture.html#component-list))，通过 */opt/gitlab/version-manifest.txt* 查看服务器上所有组件名称和版本

下面是以 GitLab-CE12 为例，文件中的内容如下：

```
gitlab-ce 12.0.3

Component                    Installed Version                          Version GUID                                                              
--------------------------------------------------------------------------------------------------------------------------------------------------
acme-client                  0.4.0                                      
alertmanager                 v0.16.2                                    git:019ace3298ec92ca01762e5ec48a9d4352699c67                              
awesome_print                1.8.0                                      
bundler                      1.17.3                                     
bzip2                        1.0.6                                      md5:00b516f4704d4a7cb50a1d97e6e8e15b                                      
cacerts                      2019.01.23                                 md5:fccbe6cec7a76e3351ad32e305184787                                      
chef-acme                    b49c28d                                    git:9bc3798adb9f1d227d6601a9479b5587b8d7b9e7                              
chef-gem                     13.6.4                                     
chef-zero                    13.1.0                                     
compat_resource              v12.19.1                                   git:e36200f6b804915b68a4ce74c8b7a293c041d9fe                              
config_guess                 c9092d05347c925a26f6887980e185206e13f9d6   git:d3bfe62ac88536dcf53203efb0d96d6590eb16e4                              
curl                         curl-7_59_0                                git:3609ab3147b11118319da4584a0c72f638697838                              
docker-distribution-pruner   v0.1.0                                     git:33748491f9eb06e812b4bcefc0353b2a5af9bb39                              
exiftool                     11.31                                      git:873e72d7d6450460ee42c9e673fd10cad8e35023                              
git                          2.21.0                                     sha256:85eca51c7404da75e353eba587f87fea9481ba41e162206a6f70ad8118147bee   
gitaly                       v1.47.0                                    git:333775253533ae4e9e9e66dc12b636821646551f                              
gitlab-config-template       12.0.3                                     
gitlab-cookbooks             12.0.3                                     
gitlab-ctl                   12.0.3                                     
gitlab-healthcheck           1c4cd0e8e06f0ccf04e72e3b536beabf           
gitlab-monitor               v3.2.0                                     git:66e0dfbd5946829c154ee1aad77c3923ade3661a                              
gitlab-pages                 v1.6.1                                     git:bd8aff8fd5cfe26ac576d351043239ffd309f8be                              
gitlab-psql                  7e26463d2041e381a5d8ff694847f93a           
gitlab-rails                 v12.0.3                                    git:08a51a9db938bb05f9a4c999075d010079e16bad                              
gitlab-scripts               12.0.3                                     
gitlab-selinux               12.0.3                                     
gitlab-shell                 v9.3.0                                     git:5b8e04fbc8ff4ca866dea4c97c881db7e8b087bb                              
gitlab-workhorse             v8.7.0                                     git:2aeae5a5291bbb256d0920f523edd31beccab426                              
gnupg                        2.2.10                                     sha256:799dd37a86a1448732e339bd20440f4f5ee6e69755f6fd7a73ee8af30840c915   
go-crond                     0.6.1                                      git:8b21a6742dee4d2cfad54079f9b579a4efcd0ad6                              
gpgme                        1.10.0                                     sha256:1a8fed1197c3b99c35f403066bb344a26224d292afc048cfdfc4ccd5690a0693   
grafana                      6.1.1                                      sha256:5c17e57adc6e48f3c9123062f4bdaef849fb4d978b0a9ff0eb8b7cf147c57835   
grafana-dashboards           v1.1.0                                     git:5650c60e34b4b11261252e23aa764a7fe6b47545                              
graphicsmagick               1.3.29                                     sha256:de820cd10597205941a7e9d02c2e679231e92e8e769c204ef09034d2279ad453   
jemalloc                     5.1.0                                      git:40a3435b8dc225ad61329aca89d9c8d0dfbc03ab                              
krb5                         krb5-1.17                                  git:c82e21d8836d4cb4c6ac7047752c9f600cb1ce33                              
libassuan                    2.5.1                                      sha256:47f96c37b4f2aac289f0bc1bacfa8bd8b4b209a488d3d15e2229cb6cc9b26449   
libedit                      20120601-3.0                               md5:e50f6a7afb4de00c81650f7b1a0f5aea                                      
libffi                       3.2.1                                      md5:83b89587607e3eb65c70d361f13bab43                                      
libgcrypt                    1.8.3                                      sha256:66ec90be036747602f2b48f98312361a9180c97c68a690a5f376fa0f67d0af7c   
libgpg-error                 1.32                                       sha256:c345c5e73cc2332f8d50db84a2280abfb1d8f6d4f1858b9daa30404db44540ca   
libiconv                     1.15                                       sha256:ccf536620a45458d26ba83887a983b96827001e92a13847b45e4925cc8913178   
libicu                       release-57-1                               git:b772241b52fcec07b1909d44d156fbcd0cbfb20c                              
libksba                      1.3.5                                      sha256:41444fd7a6ff73a79ad9728f985e71c9ba8cd3e5e53358e70d5f066d35c1a340   
liblzma                      5.2.4                                      sha256:b512f3b726d3b37b6dc4c8570e137b9311e7552e8ccbab4d39d47ce5f4177145   
libossp-uuid                 1.6.2                                      md5:5db0d43a9022a6ebbbc25337ae28942f                                      
libpng                       v1.6.35                                    git:301f7a14295a3bdfaf406dbb5004d0784dc137ea                              
libre2                       2016-02-01                                 git:848dfb7e1d7ba641d598cb66f81590f3999a555a                              
libtool                      2.4.6                                      sha256:e3bd4d5d3d025a36c21dd6af7ea818a2afcd4dfc1ea5a17b39d7854bcd0c06e3   
libxml2                      2.9.9                                      md5:c04a5a0a042eaa157e8e8c9eabe76bd6                                      
libxslt                      1.1.32                                     md5:1fc72f98e98bf4443f1651165f3aa146                                      
libyaml                      0.1.7                                      sha256:8088e457264a98ba451a90b8661fcb4f9d6f478f7265d48322a196cec2480729   
logrotate                    r3-8-5                                     git:94315822a67a1c251176e99eecff0f8ebdc8e6de                              
makedepend                   1.0.5                                      md5:efb2d7c7e22840947863efaedc175747                                      
mattermost                   5.11.0                                     md5:4775daf1d7f9e8cdde6a7aea024c3db9                                      
mixlib-log                   3.0.1                                      
ncurses                      5.9                                        md5:8cb9c412e5f2d96bc6f459aa8c6282a1                                      
nginx                        1.14.2                                     sha256:002d9f6154e331886a2dd4e6065863c9c1cf8291ae97a1255308572c02be9797   
nginx-module-vts             v0.1.18                                    git:46d85558e344dfe2b078ce757fd36c69a1ec2dd3                              
node-exporter                v0.18.1                                    git:cdd9a5fdef180018518b197d138e2410ec0d813d                              
npth                         1.6                                        sha256:1393abd9adcf0762d34798dc34fdcf4d0d22a8410721e76f1e3afcd1daa4e2d1   
ohai                         13.7.1                                     
omnibus-ctl                  1b96ac486636cac987e5b464810bb3ff673a93fe   git:e160156deaa0afc037748b10d1c9ef0a5be97dc1                              
openssl                      OpenSSL_1_0_2r                             git:6acf605b05ede307f4cd8ad0bef82af5c6bba2b7                              
package-scripts              12.0.3+ce.0                                
pcre                         8.42                                       md5:fc18afa0f14a25475cf097ee102a3e4f                                      
pcre2                        10.31                                      md5:10e1a95a0f0d80759f1b3d70e92c2cda                                      
pkg-config-lite              0.28-1                                     md5:61f05feb6bab0a6bbfab4b6e3b2f44b6                                      
popt                         1.16                                       md5:3743beefa3dd6247a73f8f7a32c14c33                                      
postgres-exporter            v0.4.7                                     git:2b896ea2df2cf9baaf26706b7a18ca6e9ca097c5                              
postgresql                   9.6.11                                     sha256:38250adc69a1e8613fb926c894cda1d01031391a03648894b9a6e13ff354a530   
postgresql_new               10.7                                       sha256:bfed1065380c1bba927bfe51f23168471373f26e3324cbad859269cc32733ede   
prometheus                   v2.8.1                                     git:851131b0740be7291b98f295567a97f32fffc655                              
python-docutils              0.13.1                                     
python3                      3.7.3                                      sha256:d62e3015f2f89c970ac52343976b406694931742fbde2fed8d1ce8ebb4e1f8ff   
rb-readline                  master                                     git:78f0f7a9ba3c4ab32d9c95e3897a5b1c8f82d152                              
redis                        3.2.12                                     md5:b005ef8161ee1e9f67d10af5bab28093                                      
redis-exporter               v1.0.0                                     git:ec9e6402eda3ea70583a23858c9e698c4390ba36                              
registry                     v2.7.1                                     git:be07be99045e304898724e8a8c21aaefbfdc8446                              
remote-syslog                1.6.15                                     
rsync                        3.1.3                                      md5:1581a588fde9d89f6bc6201e8129afaf                                      
ruby                         2.6.3                                      sha256:577fd3795f22b8d91c1d4e6733637b0394d4082db659fccf224c774a2b1c82fb   
rubygems                     2.7.9                                      md5:173272ed55405caf7f858b6981fff526                                      
runit                        2.1.2                                      md5:6c985fbfe3a34608eb3c53dc719172c4                                      
unzip                        6.0                                        sha256:036d96991646d0449ed0aa952e4fbe21b476ce994abc276e49d30e686708bd37   
util-macros                  util-macros-1.18.0                         git:334c9750017426a12b5018ec27201758c1b83a7f                              
version-manifest             0.0.1                                      
xproto                       7.0.25                                     md5:a47db46cb117805bd6947aa5928a7436                                      
zlib                         v1.2.11                                    git:cacf7f1d4e3d44d871b605da3b647f07d718623f                              

```

## 路径

### GitLab

GitLab 配置文件： */etc/gitlab/gitlab.rb*    
GitLab 及所有组件配置： */opt/gitlab*  
GitLab Repository 存储目录： */var/opt/gitlab/git-data*  
GitLab 备份目录： */var/opt/gitlab/backups*

### Unicorn

Unicorn 日志目录： */var/log/gitlab/unicorn*  

### Sidekiq

Unicorn 日志目录： */var/log/gitlab/sidekiq*

### Nginx

Nginx 日志目录： */var/log/gitlab/nginx*

### PostgreSQL

PostgreSQL 安装目录： */var/opt/gitlab/postgresql*  
PostgreSQL 日志目录: */var/log/gitlab/postgresql*   
PostgreSQL-Exporter 日志目录： */var/log/gitlab/postgres-exporter*  
PostgreSQL 数据目录： */var/opt/gitlab/postgresql/data*

### Redis

Redis 安装目录： */var/opt/gitlab/redis*  
Redis 日志目录： */var/log/gitlab/redis*


## 端口号

系统所用到的端口号，请通过官方文档 [Package defaults](https://docs.gitlab.com/omnibus/package-information/defaults.html) 查阅。在云服务器中，通过 **[安全组设置](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** 来控制（开启或关闭）端口是否可以被外部访问。 

本应用建议开启的端口如下：

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| HTTP | 80 | 通过http访问GitLab | 必须 |
| HTTPS | 443 | 通过https访问GitLab | 可选 |
| MySQL | 3306 | 远程连接MySQL | 可选 |
| phpMyAdmin on Docker | 9090 | 可视化管理MySQL | 可选 |