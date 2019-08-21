console.log('设计模式');

import Popover from './single_instence/example/Popover.ts'

const options: object = {
	a: 1,
	b: 2
}
Popover.init(options).open()