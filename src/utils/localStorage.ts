interface ILS {
  theme: string | null;
  get: (value: string) => string | null;
  add: (key: string, value: string) => string | void;
}

export const LS: ILS = {
  theme: null,

  get(value) {
    if (this.theme) {
      return this.theme;
    }

    this.theme = localStorage.getItem(value);
    return this.theme;
  },
  add(key, value) {
    localStorage.setItem(key, value);

    this.theme = value;
    return this.theme;
  }
};
