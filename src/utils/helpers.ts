export function capitalized(s: string) {
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const final = arr.join(" ");
  return final;
}

export function firstCapMoveDash(s: string) {
  const final = s.slice(0, 1).toUpperCase() + s.slice(1).replaceAll("-", " ");
  return final;
}
