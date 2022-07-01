export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fakeApi = (url = '', data = {}) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};
