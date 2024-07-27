##准备
git --version 查看git版本
brew install git 安装git
git clone xxx 克隆仓库

##创建分支
git branch xxx 创建分支
git checkout -b xxx 创建并切换到这个分支
git checkout xxx 切换分支
git branch -d xxx

##添加与提交
git add <filename>添加文件到暂存区
git add . 添加所有更改的文件到暂存区
git commit -m “xxx” 提交改动

##解决版本冲突
git pull 检测冲突
git status  查看冲突文件
git checkout your-branch-name 切换到正确的分支
git merge origin/your-branch-name 合并：将远程分支的更改合并到你的本地分支
git add . 加到暂存区
git commit -m “xxx” 提交
git push origin your-branch-name 推送更改

##打版
fomula publish patch
