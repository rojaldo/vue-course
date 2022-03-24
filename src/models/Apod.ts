export default class Apod{
    date = '';
    explanation = '';
    hdurl = '';
    mediaType = '';
    serviceVersion = '';
    title = '';
    url = '';

    constructor(json?: any){
        if(json !== undefined){
            this.date = json.date;
            this.explanation = json.explanation;
            this.hdurl = json.hdurl;
            this.mediaType = json.media_type;
            this.serviceVersion = json.service_version;
            this.title = json.title;
            this.url = json.url;    
        }
    }
}