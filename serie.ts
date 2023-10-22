export class Serie{
    id: number;
    name: string;
    platform: string;
    seasons: number;
    info: string;
    site: string;
    image: string;
    constructor(id: number, name: string, platform: string, seasons: number, info: string, site: string, image: string) {
        this.id = id;
        this.name = name;
        this.platform = platform;
        this.seasons = seasons;
        this.info = info;
        this.site = site;
        this.image = image;
    }
}