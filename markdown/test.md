-

afdadf

-
# 模块热替换（Hot Module Replacement）

## 2222
### 2121212
### 333333
#### 44444444
##### 555555555
###### 6666666666

- 模块热替换功能还在应用程序运行过程中替换、添加或删除模块，而无需加载页面，提高了开发效率，极大加速了开发时间；

# 如何运行

## 站在 APP 的角度

- 1、app 代码要求 HRM runtime 检查更新。
- 2、HRM runtime（异步）下载更新，然后通知 app 代码更新可用。
- 3、app 代码要求 HRM runtime 应用更新。
- 4、HRM runtime（异步）应用更新。

你可以设置 HRM，使次进程自动触发更新，或者你可以选择要求在用户交互后进行更新。

## 站在编译器（webpack）的角度

除了普通资源，编译器（compiler）需要发出 “update” ，以允许更新之前的版本到新的版本。"update"由两部分组成：

- 1、待更新 manifest（json)
- 2、一个或多个更新的 chunk（JavaScript）

> manifest 包括新编译hash 和所有待更新 chunk 目录。

> 每个待更新 chunk 包括用于与所有被更新模块相对应 chunk 的代码（或一个 flag 用于表明模块要被移除）。

> 编译器确保模块 ID 和 chunk ID 在这些构建之间保持一致。通常将这些 ID 存储在内存中，但是也可能将他们存储在一个 json 文件中

### 站在模块的角度

HRM 是可选功能，只会影响包含 HRM 代码的模块。

## 站在 HRM Runtime 的角度

- 对于模块系统的 runtime，附加的代码别发送到 parents 和 children 跟踪模块。
- 在管理方面，runtime 支持两种方法 check 和 apply。

### 测试 h3

> - check 发送 HTTP 请求来更新 manifest。如果请求失败，说明没有可用更新。
> - apply 方法将所有被更更新的模标记为无效。

之后，所有的无效模块都别处理和解除加载。然后更新当前的 hash，并且调用所有 accept 处理函数。runtime 切换回 ***闲置***状态，一切照常继续。

# 测试 h1 标题

## 测试 h2 标题
