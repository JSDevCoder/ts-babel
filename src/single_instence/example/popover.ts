export default class Popover {
	
	private static instence: Popover
	public options: object
	public wrap: string = 'popover-wrap'
	public mask: string = 'popover-mask'
	public closeBtn: string = 'popober-close-btn'
	
	
	private constructor(options: object) {
		this.options = options;
	}
	
	public static init(options: object) {
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
		const wrap: any = closeBtn.parentNode;
		const children: any = closeBtn.parentNode.parentNode.children;
		let mask: any;
		for(let i = 0; i< children.length; i++){
			if(children[i]['className'] === this.mask){
				mask = children[i];
			}
		}

		document.body.removeChild(wrap);
		document.body.removeChild(mask);
	}
	
	public createWrap(){
		const wrap: any = document.createElement('div');
		const closeBtn: any = this.createCloseBtn();
		wrap.setAttribute('class', this.wrap)
		wrap.style.width = '400px';
		wrap.style.height = '400px';
		wrap.style.backgroundColor = '#fff';
		wrap.style.borderRadius = '10px';
		wrap.style.position = 'absolute';
		wrap.style.left = '50%';
		wrap.style.marginLeft = '-201px';
		wrap.style.top = '50%';
		wrap.style.marginTop = '-201px';
		wrap.style.zIndex = '9';
		wrap.appendChild(closeBtn);
		return wrap;
	}
	
	public createMask() {
		const mask = document.createElement('div');
		mask.setAttribute('class', this.mask);
		mask.style.position = 'absolute';
		mask.style.left = '0px';
		mask.style.right = '0px';
		mask.style.bottom = '0px';
		mask.style.top = '0px';
		mask.style.backgroundColor = 'rgba(0, 0, 0, .4)';
		mask.style.zIndex = '8';
		return mask;
	}
	
	public createCloseBtn() {
		const closeBtn: any = document.createElement('div');
		closeBtn.setAttribute('class', this.closeBtn);
		closeBtn.style.position = 'absolute';
		closeBtn.style.left = '0px';
		closeBtn.style.bottom = '0px';
		closeBtn.style.width = '100%';
		closeBtn.style.height = '44px';
		closeBtn.style.backgroundColor = 'red';
		closeBtn.style.color = '#fff';
		closeBtn.style.textAlign = 'center';
		closeBtn.style.lineHeight = '44px';
		closeBtn.style.borderBottomLeftRadius = '10px';
		closeBtn.style.borderBottomRightRadius = '10px';
		closeBtn.innerHTML = '关闭哟';
		closeBtn.onclick = () => {
			this.close(closeBtn);
		};
		return closeBtn;
	}
}