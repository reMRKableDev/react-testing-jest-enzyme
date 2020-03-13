// Mock implementation of axios.get
export default {
  get: jest.fn(() => Promise.resolve({ data: {} }))
};
