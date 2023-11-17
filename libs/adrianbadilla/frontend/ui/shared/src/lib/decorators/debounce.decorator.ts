export function debounce(delay = 300): any {
  return function (target: any, propertyKey: string | symbol, descriptor: any) {
    const timeoutKey = Symbol();

    const original = descriptor.value;

    descriptor.value = function (...args: any) {
      clearTimeout(this[timeoutKey]);
      this[timeoutKey] = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}
