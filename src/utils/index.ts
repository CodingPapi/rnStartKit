export const delay = (time: any) =>
  new Promise(resolve => setTimeout(resolve, time));

export const asType = <T>(value: T) => value;
