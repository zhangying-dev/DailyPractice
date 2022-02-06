<!--
 * @Author: Ying Zhang
 * @Date: 2022-02-06 21:59:23
 * @LastEditTime: 2022-02-06 21:59:23
 * @LastEditors: Ying Zhang
 * @Description:
 * @FilePath: /每日一题/submit-PR/submit-PR.md
 * 道阻且长，行则将至
-->

## 步骤

### Part 1 - Local Repo Config

1. 先 Fork 感兴趣项目，即 `dmlc/gluon-cv`
2. Clone 到本地，`git clone git@github.com:YimianDai/gluon-cv.git`
3. 添加源项目 `dmlc/gluon-cv` 作为 `upstream` 源，`git remote add upstream https://github.com/dmlc/gluon-cv.git`
4. 禁止直接向 `upstream` 源 push，因为我们不是 dmlc 的人，没有 push 的权限，要提交代码必须通过 Pull Request，`git remote set-url --push upstream no_push`
5. 创建并切换到本地的新分支 `fixMixSoftmaxCrossEntropyLoss`，`git checkout -b fixMixSoftmaxCrossEntropyLoss`
   - 本地分支 `master` 的作用是与远程 `upstream` 的最新代码同步
   - 本地分支 `fixMixSoftmaxCrossEntropyLoss` 则是我们修改代码的战场

### Part 2 - Fix Bug

1. fix bug
2. 在当前 `fixMixSoftmaxCrossEntropyLoss` 分支提交本地修改，`git commit -m "XXXXXXX"`
3. Check `upstream` 源的最新状态
   - 在本地将 `upstream` 源的代码更新到最新，`git fetch upstream`
   - 将本地当前分支切换成 `master`，`git checkout master`
   - 将 `upstream/master` 的代码与本地当前默认分支，也就是本地 `master` 分支的代码融合：`git merge upstream/master`
4. 将本地分支 `fixMixSoftmaxCrossEntropyLoss` 上的修改融合到最新的 `master` 分支上
   - 将本地当前分支切换成 `fixMixSoftmaxCrossEntropyLoss`，`git checkout -b fixMixSoftmaxCrossEntropyLoss`
   - **将 `fixMixSoftmaxCrossEntropyLoss` 的代码置于已经更新到最新的 `master` 分支的最新代码之后**：`git rebase master`，如下图所示：
     ![](https://www.atlassian.com/dam/jcr:5b153a22-38be-40d0-aec8-5f2fffc771e5/03.svg)
5. 向 Github 上自己的 fork 项目 `YimianDai/gluon-cv` 的分支 `origin` 提交自己的修改，因为 Pull Request 是将两个 Github 上的 repo 比较，所以一定要将本地的修改先推送到自己的 fork repo 上，`git push origin fixMixSoftmaxCrossEntropyLoss:fixMixSoftmaxCrossEntropyLoss`，参看 Ref. 4

### Part 3 - Pull Request

1. 提交 issue：描述发现的 Bug，这个可以作为对自己后面 Pull Request 的描述
2. 是在自己 Fork 的项目界面，即 YimianDai/gluon-cv 的 Pull requests 的 Tab 中点击 New pull request，后面会自动跳到 dmlc/gluon-cv 的界面，如下所示：

![](https://raw.githubusercontent.com/YimianDai/images/master/Pull-PR-Empty.png)

## Reference

1. 查看当前是哪个分支？在工作目录下,

```shell
cat .git/HEAD
# ref: refs/heads/fixMixSoftmaxCrossEntropyLoss
```

2. 关于 `git rebase` 非常好的一篇文章，[Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
3. [向 github 的开源项目提交 PR 的步骤](https://blog.csdn.net/u010857876/article/details/79035876)
4. [GIT: PUSHING TO A REMOTE BRANCH WITH A DIFFERENT NAME](https://penandpants.com/2013/02/07/git-pushing-to-a-remote-branch-with-a-different-name/)
5. `git push <REMOTENAME> <BRANCHNAME>`
