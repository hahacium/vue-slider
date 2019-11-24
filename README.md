# 基于Vue.js的侧边栏菜单
![Demo Image](https://jeremyhamm.github.io/vue-slider/demo/demo.gif)

***

## 安装

##### NPM
```
  npm i @jeremyhamm/vue-slider
```

#### 标签
```html
<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>
```

***

## 使用

#### 全局安装
 ```javascript
import Vue from 'vue'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)
```

#### 组件安装
```javascript

import Slider from '@jeremyhamm/vue-slider'

export default {
  components: {
    'slider': Slider
  }
}
```

#### 标签使用方法
```html
 <slider :width="300" format="push" direction="left" :opacity="0.15" :links="[{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]"></slider>
```

#### 属性
| Name      | Type     | Default   | Options                |
| ---       |---       | ---       | ---                    |
| width     | `Number` | `300`     | Menu Width `(px)`      |
| format    | `String` | `overlay` | `push, full, overlay`  |
| direction | `String` | `left`    | `left, right`          |
| opacity   | `Number` | `0`       | `0.00 - 1.00` Representing [css opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)        |
| links     | `Array`  | null      | `[{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]` |

#### 样式
 `/assets/sass/variables.scss`
