/**
 * 单例模式 - 懒汉模式
 * @email mnkv@163.com
 */
export default class SingleInstence {
	// 静态属性，标识当前创建的对象实例
	private static instence: SingleInstence
	
	// 私有化构造函数，防止在外部实例化
	private constructor() {}
	
	// 静态方法，返回实例化后的对象，为类访问提供唯一出口
	public static getInstence() {
		// 检测是否已创建实例对象
		if(!this.instence){
			
			// 挂载
			this.instence = new SingleInstence;
		}
		
		// 返回创建的对象
		return this.instence;
	}
}