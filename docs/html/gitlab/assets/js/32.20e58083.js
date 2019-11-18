(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{188:function(t,a,e){"use strict";e.r(a);var i=e(0),s=Object(i.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"初始化安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化安装")]),t._v(" "),e("p",[t._v("在云服务器上部署 GitLab 预装包之后，请参考下面的步骤快速入门。")]),t._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("ol",[e("li",[t._v("在云控制台获取您的 "),e("strong",[t._v("服务器公网IP地址")])]),t._v(" "),e("li",[t._v("在云控制台安全组中，检查 "),e("strong",[t._v("Inbound（入）规则")]),t._v(" 下的 "),e("strong",[t._v("TCP:80")]),t._v(" 端口是否开启")]),t._v(" "),e("li",[t._v("若想用域名访问 GitLab，请先到 "),e("strong",[t._v("域名控制台")]),t._v(" 完成一个域名解析")])]),t._v(" "),e("h2",{attrs:{id:"gitlab-安装向导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-安装向导","aria-hidden":"true"}},[t._v("#")]),t._v(" GitLab 安装向导")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("使用本地电脑的 Chrome 或 Firefox 浏览器访问网址："),e("em",[t._v("http://域名")]),t._v(" 或 "),e("em",[t._v("http://Internet IP")]),t._v(", 就进入了GitLab引导页面。根据系统提示，开始重置管理员密码。\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-createpw-websoft9.png",alt:"GitLab初始化页面"}})])]),t._v(" "),e("li",[e("p",[t._v("登陆系统（用户名是"),e("code",[t._v("root")]),t._v("，密码是上一步自行设置的）\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-login-websoft9.png",alt:"GitLab 登录"}})])]),t._v(" "),e("li",[e("p",[t._v("进入 GitLab 控制台，开始使用系统\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-backend-websoft9.png",alt:"GitLab 后台"}})])]),t._v(" "),e("li",[e("p",[t._v("进入管理设置面板（Admin Area）\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-adminpanel-websoft9.png",alt:"GitLab 管理设置面板"}})])]),t._v(" "),e("li",[e("p",[t._v("通过：【User Settings】>【Preferences】设置语言，目前已经支持中文\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-setlanguage-websoft9.png",alt:"GitLab 设置语言"}})])]),t._v(" "),e("li",[e("p",[t._v("通过：【User Settings】>【SSH key】设置秘钥\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-sshkey-websoft9.png",alt:"GitLab SSH key"}})])]),t._v(" "),e("li",[e("p",[t._v("如果你部署的是 GitLab-EE（企业版），请打开：【管理中心】>【许可证】，然后"),e("strong",[t._v("试用")]),t._v("或"),e("strong",[t._v("启用")]),t._v("企业版\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlabee-license-websoft9.png",alt:"Gitlab 导入授权"}})])])]),t._v(" "),e("blockquote",[e("p",[t._v("需要了解更多 GitLab 的使用和配置，请参考官方文档："),e("a",{attrs:{href:"https://docs.gitlab.com/omnibus/README.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab Documentation"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h4",{attrs:{id:"浏览器打开ip地址，无法访问-gitlab（白屏没有结果）？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器打开ip地址，无法访问-gitlab（白屏没有结果）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器打开IP地址，无法访问 GitLab（白屏没有结果）？")]),t._v(" "),e("p",[t._v("您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容")]),t._v(" "),e("h4",{attrs:{id:"gitlab能打开，但总是出现502错误？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab能打开，但总是出现502错误？","aria-hidden":"true"}},[t._v("#")]),t._v(" GitLab能打开，但总是出现502错误？")]),t._v(" "),e("p",[t._v("GitLab 所需内存最低为4G，若服务器配置太低会出现502错误")]),t._v(" "),e("h4",{attrs:{id:"gitlab-新装或重启后，需要等待1分钟才能使用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-新装或重启后，需要等待1分钟才能使用？","aria-hidden":"true"}},[t._v("#")]),t._v(" GitLab 新装或重启后，需要等待1分钟才能使用？")]),t._v(" "),e("p",[t._v("对于单核CPU的服务器，Unicorn and Sidekiq 服务启动最少需要一分钟")]),t._v(" "),e("h4",{attrs:{id:"本部署包采用的哪个数据库来存储-gitlab-数据？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本部署包采用的哪个数据库来存储-gitlab-数据？","aria-hidden":"true"}},[t._v("#")]),t._v(" 本部署包采用的哪个数据库来存储 GitLab 数据？")]),t._v(" "),e("p",[t._v("是PostgreSQL")]),t._v(" "),e("h4",{attrs:{id:"没有购买-license-是否可以使用-gitlab-企业版？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#没有购买-license-是否可以使用-gitlab-企业版？","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有购买 License 是否可以使用 GitLab 企业版？")]),t._v(" "),e("p",[t._v("如果安装了 GitLab 企业版，在没有导入 License 的情况下使用的是 社区版的所有功能。"),e("a",{attrs:{href:"https://about.gitlab.com/install/ce-or-ee/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLab-EE vs GitLab-CE"),e("OutboundLink")],1)])])},[],!1,null,null,null);a.default=s.exports}}]);