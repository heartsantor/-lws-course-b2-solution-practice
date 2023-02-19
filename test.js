const a = {
  title: "Learn with Sumit",
  social: {
    facebook: "https://facebook.com/letslearnwithsumit",
    youtube: {
      link: "https://youtube.com/learnwithsumit",
      info: {
        title: "Learn with Sumit - LWS Bangladesh",
        description: "Learn programming like never before",
        meta: {
          subscribers: "73.1k",
          views: "600K",
        },
      },
      playlists: [
        "React Playlist",
        "Node Playlist",
        "Beginner JS Playlist",
        "Modern JS Playlist",
      ],
    },
  },
};

const b = {
  ...a,
  social: {
    ...a.social,
    youtube: {
      ...a.social.youtube,
      info: {
        ...a.social.youtube.info,
        meta: {
          ...a.social.youtube.info.meta,
        },
      },
    },
  },
};

console.log(b);

const getMax = (a, b) => Math.max(a, b);

const result = [1, 5, 7, 10, 0, 22, 37].reduce(getMax);

console.log(result);