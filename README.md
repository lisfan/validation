# Validation 数据类型验证

提供常规的数据类型验证工具函数，方法名和功能参考了[lodash](https://lodash.com/docs/4.17.4)

## 安装

```bash
npm install -S @~lisfan/validation
```

## Usage 起步

``` js
import validation from '@~lisfan/validation'

// 返回所求值的数据类型
validation.typeof('lisfan') // string
validation.typeof([1,2,3]) // array

// 验证数据类型
validation.isNumber(10) // true
validation.isArray('lisfan') // false
```