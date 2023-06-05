export default interface Multimedia {
  multimediaInstallations: MultimediaInstallation[];
}

export interface MultimediaInstallation {
  name: string;
  details: Details;
}

export interface Details {
  image: string;
  description: string;
  url: string;
}
