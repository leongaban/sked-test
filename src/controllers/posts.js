// eslint-disable-next-line import/prefer-default-export
export const get = () => {
  // eslint-disable-next-line no-undef
  return fetch('data/posts.json').then((res) => res.json());
};
