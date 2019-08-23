import Popover from './single_instence/example/Popover.ts'
import SimpleFactory from './factory/SimpleFactory.ts'
import RouterFactory from './factory/example/RouterFactory.ts'
/////////////////////////////////////////////////////////
///////////////弹出层
/////////////////////////////////////////////////////////
//这个options对象，可以传入一些自定义配置，稍后会优化
const options: any = {
	title: '弹窗标题',
	content: '弹窗内容',
	isConfirm: true,
	confirmText: '确定按钮哦',
	confirmCallback: () => {
		console.log('回调函数哟')
		alert('回调函数哟')
	},
	closeCallback: () => {
		console.log('回到函数哟')
		alert('回调函数哟')
	}
}
// 初始化单例模式弹层
const popInit = Popover.init(options);

// 创建按钮
const btn: any = document.createElement('div');
const attr: string = `
	width: 120px;
	height: 44px;
	background-color: #cc0200;
	color: #fff;
	text-align: center;
	line-height: 44px;
	border-radius: 10px;
	margin-top: 10px;
	margin-left: 10px;
`;
btn.style.cssText = attr;
btn.innerHTML = '点击弹层';
btn.addEventListener('click', () => {
	popInit.open()
}, false);

document.body.appendChild(btn);
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const admin = SimpleFactory.getInstence('admin');;
const other = SimpleFactory.getInstence('other');

console.log(admin);
console.log(other)

const role = RouterFactory.init('超级管理员');
console.log(role)
