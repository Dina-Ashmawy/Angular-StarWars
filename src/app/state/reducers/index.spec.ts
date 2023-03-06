import { reducer, initialState } from './index';

describe('Reducer', () => {
    describe('unknown state', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = reducer(initialState, action);
            expect(result).toBe(initialState);
        });
    });
});
