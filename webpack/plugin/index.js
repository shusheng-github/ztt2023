class MyPlugin {
  constructor() { };
  apply (compiler) {
    // done: 编译后的文件已经输出到目标目录,整体代码的构建工作结束时触发
    compiler.hooks.done.tap('MyPlugin', (compilation) => {
      console.log('编译完成-->')
    })
  }
}

module.exports = MyPlugin;