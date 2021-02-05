import {add} from './service'

it('renders correctly', () => {
    const res = add(2,3)
    expect(res).toBe(5);
});