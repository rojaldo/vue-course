export default class Beer {
    id = 0;
    name = '';
    tagline = '';
    firstBrewed = '';
    description = '';
    imageUrl = '';
    abv = 0;
    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.tagline = json.tagline;
        this.firstBrewed = json.first_brewed;
        this.description = json.description;
        this.imageUrl = json.image_url;
        this.abv = json.abv;
    }
}