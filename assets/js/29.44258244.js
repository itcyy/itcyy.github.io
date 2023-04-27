(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{302:function(t,i,a){"use strict";a.r(i);var n=a(14),r=Object(n.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"harmonyos-app-开发应用框架的架构和组成-java"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#harmonyos-app-开发应用框架的架构和组成-java"}},[t._v("#")]),t._v(" HarmonyOS app 开发应用框架的架构和组成（Java）")]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"应用框架组成"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#应用框架组成"}},[t._v("#")]),t._v(" 应用框架组成")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%871.png",alt:""}})]),t._v(" "),i("p",[t._v("​\t应用框架，简单来说可以理解为面对开发者的一个应用接口。我们可以简单来看，左边就是部署态的示意图们可以看出部署态有UI描述，业务逻辑代码，共享库，配置文件来组成。一般来说，我们的应用会有我们的组件，布局还有实现交互作用的业务逻辑代码，还有我们业务逻辑实现需要的第三方库和SDK以及我妈们的配置文件。当然我们也会有对应的一个运行态，资源管理等来将UI页面展现在用户的面前，当然在运行的时候也会进行一些包管理，任务管理等来辅助我们的程序执行。借助API和Kits等来实现我们软件的一些基本业务功能。")]),t._v(" "),i("h2",{attrs:{id:"harmonyos应用部署运行"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#harmonyos应用部署运行"}},[t._v("#")]),t._v(" HarmonyOS应用部署运行")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%872.png",alt:""}})]),t._v(" "),i("p",[t._v("我们在HarmonyOS将代码打包成一个app，这个app是由很多hap组成的，app打包完成后就会上传到云端，在云端会对我们的app进行检验和拆包，以实现我们app的基本功能和展现，根据不同的设备以及我们的hap功能等，我们就会部署到应用市场，然后在我们的端测侧，我们下载app就会将我们的app打包下载到我们的设备，我们的app运行主要包括了我们的UI和我们Ability。")]),t._v(" "),i("h2",{attrs:{id:"ability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ability"}},[t._v("#")]),t._v(" Ability")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%873.png",alt:""}})]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("\t\tAbility  是应用所具备能力的抽象，也是应用程序的重要组成部分。一个应用可以具备多种能力（即可以包含多个 Ability），HarmonyOS 支持应用以 Ability 为单位进行部署。Ability 可以分为 FA（Feature Ability）和 PA（Particle Ability）两种类型，每种类型为开发者提供了不同的模板，以便实现不同的业务功能。你可以把我们的Ability理解为我们在鸿蒙开发里的一个基本单元，一个 Page 可以包含多个 AbilitySlice，但是 Page 进入前台时界面默认只展示一个AbilitySlice。默认展示的 AbilitySlice 是通过   setMainRoute()  方法来指定的。如果需要更改默认展示的 AbilitySlice，可以通过   addActionRoute()  方法为此 AbilitySlice 配置一条路由规则。此时，当其他 Page 实例期望导航到此 AbilitySlice 时，可以在 Intent 中指定 Action。 addActionRoute()  方法中使用的动作命名，需要在应用配置文件（ config.json ）中注册。\n")])])]),i("p",[t._v("​\t\t\t现在我们知道这个Page Ability是主要负责页面交互的，那么就可以理解为Android 的Activity。那么都知道Activity有生命周期，同样的Page Ability也是的。下面来看看它的生命周期。")]),t._v(" "),i("h3",{attrs:{id:"生命周期"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%879.png",alt:""}})]),t._v(" "),i("p",[t._v("声明周期分别是 onStart() 、 onActive() 、 onInactive() 、 onBackground() 、 onForeground() 、 onStop()。")]),t._v(" "),i("ul",[i("li",[t._v("onStart()   当系统首次创建  Page Ability 实例时，触发该回调。对于一个  Page Ability 实例，该回调在其生命周期过程中仅触发一次， Page Ability 在该逻辑后将进入 INACTIVE 状态。开发者必须重写该方法，并在此配置默认展示的 AbilitySlice。")]),t._v(" "),i("li",[t._v("onActive()      Page Ability 会在进入 INACTIVE 状态后来到前台，然后系统调用此回调。 Page Ability  在此之后进入ACTIVE 状态，该状态是应用与用户交互的状态。 Page Ability 将保持在此状态，除非某类事件发生导致  Page Ability 失去焦点，比如用户点击返回键或导航到其他  Page Ability 。当此类事件发生时，会触发 Page Ability 回到 INACTIVE 状态，系统将调用   onInactive()  回调。此后， Page Ability 可能重新回到ACTIVE 状态，系统将再次调用  onActive()  回调。因此，开发者通常需要成对实现   onActive()   和  onInactive() ，并在  onActive()  中获取在  onInactive()  中被释放的资源。")]),t._v(" "),i("li",[t._v("onInactive()   当   Page Ability 失去焦点时，系统将调用此回调，此后 Page 进入 INACTIVE 状态。开发者可以在此回调中实现 Page 失去焦点时应表现的恰当行为。")]),t._v(" "),i("li",[t._v("onBackground()   如果  Page Ability 不再对用户可见，系统将调用此回调通知开发者用户进行相应的资源释放，此后 Page Ability 进入 BACKGROUND 状态。开发者应该在此回调中释放  Page Ability  不可见时无用的资源，或在此回调中执行较为耗时的状态保存操作。")]),t._v(" "),i("li",[t._v("onForeground()   处于 BACKGROUND 状态的  Page Ability 仍然驻留在内存中，当重新回到前台时（比如用户重新导航到此  Page Ability ），系统将先调用 onForeground()回调通知开发者，而后 Page 的生命周期状态回到 INACTIVE 状态。开发者应当在此回调中重新申请在 onBackground()中释放的资源，最后 Page 的生命周期状态进一步回到 ACTIVE 状态，系统将通过 onActive()回调通知开发者用户。")]),t._v(" "),i("li",[t._v("onStop()   系统将要销毁  Page Ability 时，将会触发此回调函数，通知用户进行系统资源的释放。")])]),t._v(" "),i("h3",{attrs:{id:"ability类型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ability类型"}},[t._v("#")]),t._v(" Ability类型")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%874.png",alt:""}})]),t._v(" "),i("p",[t._v("我们的Ability分成服务Ability和数据Ability。"),i("strong",[t._v("服务Ability")]),t._v(" 和数据Ability，就是服务能力和数据能力。Service用于提供后台运行任务的能力。Data 用于对外部提供统一的数据访问抽象。在配置文件（config.json）中注册 Ability 时，可以通过配置 Ability 元素中的“type”属性来指定 Ability 模板类型。")]),t._v(" "),i("h2",{attrs:{id:"进程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%8710.png",alt:""}})]),t._v(" "),i("p",[t._v("在HarmonyOS设计中，是允许我们的外度的与安全服务的，其实我们的app是可以灵活组装，灵活多变的，它除了我们的一些公共线程外，也是有一个其他的元服务线程。这个其他的元服务可以来自其他的设备也可以来自云侧，这也就体现了我们HarmonyOS的一个底层互联的能力。")]),t._v(" "),i("h2",{attrs:{id:"用户程序框架"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#用户程序框架"}},[t._v("#")]),t._v(" 用户程序框架")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%876.png",alt:""}})]),t._v(" "),i("h2",{attrs:{id:"ui编程框架"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ui编程框架"}},[t._v("#")]),t._v(" UI编程框架")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%875.png",alt:""}})]),t._v(" "),i("p",[t._v("在我们HarmonyOS app开发中，主要有两种方式，一种是命令式，一种是声明式，在目前看来，华为HarmonyOS app开发主要还是依靠Java来进行开放，目前主推语言依然是Java。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%877.png",alt:""}})]),t._v(" "),i("p",[i("img",{attrs:{src:"https://www.itcyy.cn/nailong/img/img/%E5%9B%BE%E7%89%878.png",alt:""}})]),t._v(" "),i("p",[t._v("通过Java的一个多线程开发，我们的zpp组件，布局，其实最终是交给我们的GPU来进行渲染，从而让用户进行使用，我们Java UI 的一个开发也就是一个组件优化过程和处理，以及底层逻辑的实现。")])])}),[],!1,null,null,null);i.default=r.exports}}]);