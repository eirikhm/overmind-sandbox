
import { createOvermindMock } from 'overmind';
import { config } from '../../config';
describe("Actions", () => {
    test("open guest search with results", async () => {
        const mock = createOvermindMock(config);
        const mutations = await mock.actions.core.someAction()
        expect(mutations.length).toBe(1);
    })
});