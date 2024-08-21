export function generateRandomString(length: number = 10): string {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export function setDynamicGlobalCSSVar(name: string, value: string) {
  type GlobalVarsStyleElement = HTMLStyleElement & { _vars?: {[key: string]: string} }
  let style: GlobalVarsStyleElement | null = document.getElementById('dynamic-global-css-vars') as GlobalVarsStyleElement | null;

  if (!style) {
    style = document.createElement('style');
    style.id = 'dynamic-global-css-vars';
    document.head.appendChild(style);
  }

  let vars = style._vars || {};
  vars[name] = value;
  style._vars = vars;

  let css = ':root{';

  for (let key in vars) {
    css += `--${key}:${vars[key]};`;
  }

  css += '}';

  style.textContent = css;
}
