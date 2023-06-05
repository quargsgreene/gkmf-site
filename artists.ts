export default interface Artists {
  artists: Artist[];
}

export  interface Artist {
  name: string;
  details: Details;
}

export  interface Details {
  images: string[];
  description: string;
  url: string;
}
