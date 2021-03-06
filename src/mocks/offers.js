import {RoomType} from "../constants";

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `/img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`../public/img/apartment-01.jpg`, `../../public/img/apartment-02.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `/img/apartment-small-03.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: RoomType.apartment,
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10
      },
      name: `Paris`
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare orci nisl, quis elementum elit tristique eu.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`],
    host: {
      avatarUrl: `/img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 2,
    images: [`/img/apartment-03.jpg`, `/img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `/img/apartment-small-04.jpg`,
    price: 70,
    rating: 4.1,
    title: `Donec tristique nec tortor eget vestibulum`,
    type: RoomType.apartment,
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 10
      },
      name: `Cologne`
    },
    description: `Maecenas consequat sapien erat, eget lacinia quam facilisis interdum.`,
    goods: [`Heating`, `Kitchen`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `/img/avatar-max.jpg`,
      id: 4,
      isPro: false,
      name: `Max`
    },
    id: 3,
    images: [`/img/studio-01.jpg`, `/img/studio-photos.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 1,
    previewImage: `/img/studio-01.jpg`,
    price: 90,
    rating: 4.4,
    title: `Mauris iaculis a nisl ut semper`,
    type: RoomType.studio,
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 51.233334,
        longitude: 6.783333,
        zoom: 10
      },
      name: `Düsseldorf`
    },
    description: `Maecenas consequat sapien erat, eget lacinia quam facilisis interdum.`,
    goods: [`Heating`, `Cable TV`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `/img/avatar-max.jpg`,
      id: 4,
      isPro: false,
      name: `Max`
    },
    id: 4,
    images: [`/img/room.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `/img/room.jpg`,
    price: 60,
    rating: 4.8,
    title: `Donec in sollicitudin felis`,
    type: RoomType.room,
  },
];

export default offers;
