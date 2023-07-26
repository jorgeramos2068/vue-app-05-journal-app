export default () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu malesuada ante. Quisque magna sapien, tincidunt vel ornare sed, pharetra sit amet sapien. Nam pellentesque augue sit amet purus viverra fermentum.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu malesuada ante. Quisque magna sapien, tincidunt vel ornare sed, pharetra sit amet sapien. Nam pellentesque augue sit amet purus viverra fermentum.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu malesuada ante. Quisque magna sapien, tincidunt vel ornare sed, pharetra sit amet sapien. Nam pellentesque augue sit amet purus viverra fermentum.',
      picture: null,
    },
    {
      id: new Date().getTime() + 3000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu malesuada ante. Quisque magna sapien, tincidunt vel ornare sed, pharetra sit amet sapien. Nam pellentesque augue sit amet purus viverra fermentum.',
      picture: null,
    },
  ],
});
