mmUI又名超级美眉UI框架。为混合型app开发而做的UI框架。混合型App的视图效果是用Html5做的，而mmUI专门为该类App开发了一套框架。拥有50个控件。涉及到栅格 、表单、按钮、产品列表、联系人列表、聊天窗、筛选面板等。mmUI没有发明轮子，而是通过参考Bootstrap、weUI、suiUI、ionic框架的启发，结合各自特色而设计的一套比较完整的iphone风格UI框架。
mmUI框架的特点是通过数个class控制可以改变排版布局样式，例如要实现淘宝产品的列表布局<div class="list lr product"><ul><li>...</li></ul></div>如果把list改为grid就会变成多列布局，把lr改为tb就会将图文左右结构变成图文上下结构，把product改为product-s就会变成精简产品布局。把product改为menu、form就变成了菜单、表单的布局。
mmUI的主题风格文件独立在一个theme.css放置，通过改变该文件可以快速的直接改变所有控件的字体颜色、背景颜色、边框样式。
mmUI的css未压缩文件大小为50KB，是suiUI的1/2，是Bootstrap的1/6，却有suiUI没有的Bootstrap控件，Bootstrap没有的suiUI控件,还有weUI控件，可以说是真正的精、简、美。
mmUI的框架可以结合Vue.js一同使用，同时还附带了mm-http.js文件，可以通过函数view()的方式渲染模板和引用模板文件，实现了前端只要会写json而不用写程序码的效果。
