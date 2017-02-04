import { proto } from '../src/index';


describe('test methods', () => {
	const now = proto.now();

	it('test `parse` method', () => {
		const time = now.getTime();

		expect(proto.parse('aaa')).toBeNull();

		expect(proto.parse(time + '').getTime()).toBe(time);

		expect(proto.parse(time).getTime()).toBe(time);
	});
});

