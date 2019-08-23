import menu from './menu.json'
import role from './role.json'
export default class RouterFactory {
	
	constructor(public opts: any) {
		 this.opts = opts;
	}
	
	public static init(param: string): any {
		let obj: any;
		role.forEach((v: string) => {
			if(v === param){
				// 在这里可以对路由做一些处理
				const menuData: any = menu[0];
				obj = new RouterFactory(menuData);
			}
		});
		return obj;
	}
}