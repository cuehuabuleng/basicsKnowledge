# 服务器： 华为云 => centos7.2

## 防火墙命令操作
- 查看防火墙状态: `systemctl status firewalld`
- 开启防火墙： `systemctl start firewalld `
- 关闭防火墙： `systemctl stop firewalld`
- 打开防火墙端口： `sudo firewall-cmd --zone=public --permanent --add-service=http`
- 重启：`  sudo firewall-cmd --reload`
- 可以查看一下防火墙打开的所有的服务: `sudo firewall-cmd --list-service`
- 查看特定端口是否开放: ` firewall-cmd --query-port=5000/tcp `
- 开放特定端口：`firewall-cmd --add-port=5000/tcp --permanent`
- 关闭特定端口：`firewall-cmd --remove-port=7001/tcp --permanent`
- 重新加载: `firewall-cmd --reload` 
## ngin命令操作
- 如何查看Nginx服务器的状态： `sudo systemctl status nginx`
- 停止Nginx：`sudo systemctl stop nginx` 
- 要启动Nginx: `sudo systemctl start nginx`
- 重新加载Nginx服务(如果要在更改配置后刷新Nginx，最好最好重新加载服务。这将关闭旧进程，并使用新配置重新启动新进程。,使用systemctlLinux命令):`sudo systemctl reload nginx`
- 强制重启Nginx(对于主要配置更改，可以强制完全重新启动Nginx。这将强制关闭整个服务和子流程，然后重新启动整个程序包。): `sudo systemctl restart nginx`

/home/static/index.html

/home/static/personal-website/public

/home/static/basic-knowledge/dist

域名对应多端口的nginx配置：https://blog.csdn.net/wangjinshan2827/article/details/72857786?locationNum=7&fps=1
