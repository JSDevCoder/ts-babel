interface SingleInstenceInterface {
	
}

export default class SingleInstence implements SingleInstenceInterface {
	private static instence: SingleInstence
	private constructor() {}
	public static getInstence() {
		if(!SingleInstence.instence){
			SingleInstence.instence = new SingleInstence;
		}
		return this.instence;
	}
}