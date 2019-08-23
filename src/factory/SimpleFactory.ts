/**
 * 工厂模式 - 简单工厂模式
 * @email mnkv@163.com
 */
export default class SimpleFactory {
	public name: string
	public age: number
	
	constructor(opts: any) {
		this.name = opts.name;
		this.age = opts.age;
	}
	
	/**
	 * 静态实例方法
	 */
	public static getInstence(role: string): any {
		switch(role) {
			case 'admin':
				const admin: any = {name: '李四', age: 20};
				return new SimpleFactory(admin);
				break;
			case 'other':
				const other: any = {name: '赵四', age: 22};
				return new SimpleFactory(other);
				break;
		}
	}
}