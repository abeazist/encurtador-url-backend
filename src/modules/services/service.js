export class LinkService {
    constructor(linkRepository) {
        this.linkRepository = linkRepository;
    }

    getAllLinks(legenda) {
        return this.linkRepository.findAll(legenda);
    }
    
    getLinkById(){
        return this.linkRepository.findById(id);
    }

    createLink({url_original, legenda}){

    }

    deleteLink(id){
        return this.linkRepository.remove(id);
    }

    upadateLink(){

    }

    getUrlOriginal(codigo){

    }
}

