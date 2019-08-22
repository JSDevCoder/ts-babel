export default class Popover {
	
	private static instence: Popover
	public options: any
	public wrap: string = 'popover-wrap'
	public mask: string = 'popover-mask'
	public closeBtn: string = 'popober-close-btn'
	
	
	private constructor(options: any) {
		this.options = options;
	}
	
	public static init(options: any) {
		if(!Popover.instence){
			Popover.instence = new Popover(options);
		}
		return this.instence;
	}
	
	public open(){
		const wrap = this.createWrap();
		const mask = this.createMask();
		document.body.appendChild(wrap);
		document.body.appendChild(mask);
	}
	
	public close(closeBtn: any) {
		const mask: any = closeBtn.parentNode;
		const children: any = closeBtn.parentNode.parentNode.children;
		let wrap: any;
		for(let i = 0; i< children.length; i++){
			if(children[i]['className'] === this.wrap){
				wrap = children[i];
			}
		}
		document.body.removeChild(wrap);
		document.body.removeChild(mask);
	}
	
	public createWrap(){
		const wrap: any = document.createElement('div');
		const title = this.createTitle();
		const content = this.createContent();
		const confirm = this.createConfirm();
		const style = `
			width: 400px;
			height: 400px;
			background-color: #fff;
			border-radius: 10px;
			position: absolute;
			left: 50%;
			margin-left: -201px;
			top: 50%;
			margin-top: -201px;
			z-index: 9;
		`;
		wrap.style.cssText = style;
		wrap.setAttribute('class', this.wrap);
		wrap.appendChild(title);
		wrap.appendChild(content);
		if(this.options.isConfirm){
			wrap.appendChild(confirm);
		}
		return wrap;
	}
	
	public createMask() {
		const mask = document.createElement('div');
		const closeBtn: any = this.createCloseBtn();
		const style: string = `
			position: absolute;
			left: 0px;
			right: 0px;
			bottom: 0px;
			top: 0px;
			background-color: rgba(0, 0, 0, .4);
			z-index: 8;
		`;
		mask.style.cssText = style;
		mask.setAttribute('class', this.mask);
		mask.appendChild(closeBtn);
		return mask;
	}
	
	public createCloseBtn() {
		const closeBtn: any = document.createElement('div');
		const style = `
			position: absolute;
			right: 10px;
			top: 10px;
			width: 120px;
			height: 44px;
			background-color: #cc0200;
			color: #fff;
			text-align: center;
			line-height: 44px;
			border-radius: 10px;
		`;
		closeBtn.style.cssText = style;
		closeBtn.setAttribute('class', this.closeBtn);
		closeBtn.innerHTML = '关闭哟';
		closeBtn.addEventListener('click', () => {
			this.close(closeBtn);
			console.log('关闭哟')
			alert('即将关闭哟')
			this.options.closeCallback();
		}, false);
		return closeBtn;
	}
	
	public createTitle() {
		const title = document.createElement('div');
		const text: string = this.options.title;
		const style = `
			width: 100%;
			height: 44px;
			border-bottom: 1px solid #ccc;
			text-align:center;
			line-height: 44px;
		`;
		title.style.cssText = style;
		title.innerHTML = text || '测试标题';
		return title;
	}
	
	public createContent() {
		const content = document.createElement('div');
		const text: string = this.options.content;
		const style = `
			width: 380px;
			height: 281px;
			padding:10px;
		`;
		content.style.cssText = style;
		content.innerHTML = text || '这里是主题内容哟~~';
		return content;
	}
	
	public createConfirm() {
		const confirm = document.createElement('div');
		const text: string = this.options.confirmText || '确定';
		const style: string = `
			width: 120px;
			height:44px;
			margin: 0 auto;
			background-color: #cc0200;
			color: #fff;
			border-radius: 10px;
			text-align:center;
			line-height:44px;
		`;
		confirm.style.cssText = style;
		confirm.innerHTML = text;
		confirm.addEventListener('click', () => {
			alert('点击确定按钮哦')
			console.log('点击确定按钮哦')
			this.options.confirmCallback();
		}, false);
		return confirm;
	}
}