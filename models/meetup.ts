class Meetup {
  id: string;
  image: string;
  title: string;
  address: string;

  constructor(id: string, image: string, title: string, address: string) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.address = address;
  }
}

export default Meetup;
