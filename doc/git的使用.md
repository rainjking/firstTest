# git的使用

## 1.git的安装

使库安装：

sudo apt update

sudo apt-get install git

测试：git version

## 2.git工作流程

![image-20211124172518375](/home/osuser/.config/Typora/typora-user-images/image-20211124172518375.png)

概念：

- **工作区：**就是你在电脑里能看到的目录。

- **暂存区：**英文叫 stage 或 index。一般存放在 **.git** 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。

- **版本库：**工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库。

  ![image-20211128161604896](image-20211128161604896.png)

![image-20211128161641221](image-20211128161641221.png)

## 3.git常用命令

1)git项目创建

新建一个目录，在此目录下执行：git init

执行后会创建一个隐藏.git目录：

![image-20211124173118940](image-20211124173118940.png)

2）add

![image-20211128162951056](image-20211128162951056.png)

3)commit

提交文件到本地库。

提交所有在staging area中的文件到registory:

git commit -m [message]

message是提交时的备注。

![image-20211128163435491](image-20211128163435491.png)

![image-20211128163954835](image-20211128163954835.png)

4)push

上传远程代码到远程仓库并合并。

前提：远程有仓库。

![image-20211128170025627](image-20211128170025627.png)

url栏里就是远程仓库地址。

先提添加远程仓库：git remote

git remote add 别名 远程仓库url

![image-20211128170732511](image-20211128170732511.png)错误的原因是没有指定远程的branch，需要指定为master。

注意：github页面上将master分支名改成了“main”,但push时还是需要用master,master对应web页面上的main。

![image-20211128170821950](image-20211128170821950.png)

push时命令正确，认证是失败

![image-20211128171905651](image-20211128171905651.png)

获取token的方法;

![image-20211128172442490](image-20211128172442490.png)

![image-20211128172501308](image-20211128172501308.png)



![image-20211128172418174](image-20211128172418174.png)

![image-20211128172944348](image-20211128172944348.png)

关闭页面之前，需要把token拷贝出来，以后当密码使用：

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

![image-20211128173134517](image-20211128173134517.png)

password需要输入token.

5)clone 

将远程仓库clone到本地：

git clone 远程仓库url

clone后操作步骤：

（1）修改文件（project正常进程）

（2）add

（3）commit

（4）远程同布：

分支问题：从本地开始创建的项目，主分支是master;从远程开始，主分支是main。

a)添加远程仓库：

git remote add 别名 远程仓库url

![image-20211201164725718](image-20211201164725718.png)

注意：password  不能输入github的用户密码，而要输入token.

6)diff 

查看工作区文件和staging area文件的区别。

7）查看提交历史log

8)恢复reset

git reset --hard HEAD^1

回退到上一个版本，--hard将直接修改工作区文件内容。

## 4.在vscode中使用git

1）用命令行进行git初始化

在vscode打开项目之前，已经执行了：git init,git add

在此目录下打开，可以直接用vscode的版本管理。

2）用vscode进行git初始化
