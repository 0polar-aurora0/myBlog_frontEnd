<!--
 * @Author: fuzhenghao
 * @Date: 2022-06-15 10:26:26
 * @LastEditTime: 2022-06-20 10:49:14
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_frontEnd\src\assets\mackdown\javascipt系列\javascript-深拷贝、浅拷贝.md
-->
## javascript深拷贝、浅拷贝

- #### 深拷贝:	

- #### 浅拷贝：

讲到深拷贝和浅拷贝，需要先介绍内存应用的问题，深拷贝和浅拷贝的区别就是由此而来。

#### 浅拷贝实现

1. ##### array.slice

      ```javascript
      let arr = [
        1000,
        50,
        {
          value: 25,
        },
      ];
      
      let newArray = arr.slice();
      console.dir(newArray); //[ 1000, 50, { value: 25 } ]
      arr[0] = 500;
      arr[2].value = 30;
      console.dir(newArray); //[ 1000, 50, { value: 30 } ]
      ```

   在上述代码中可以发现在slice浅拷贝`arr`后，修改arr中对象中的值`value`为30，可以发现新拷贝生成的数组   `newArray`对象中的值也发生了改变，这是就要使用深拷贝

2. ##### array.concat

   ```javascript
   let newArray2 = arr.concat();
   console.dir(newArray2); //[ 500, 50, { value: 30 } ]
   ```

3. ##### ...展开运算符

   

   以上三种方法均使用`array.prototype`上的原生方法实现

   

#### 深拷贝实现

1. 