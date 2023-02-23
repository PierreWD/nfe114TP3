import { Catalogue } from './Catalogue';

export class AddArticle {
    static readonly type = '[Catalogue] Add article';
    
    constructor(public payload: Catalogue) {}
}

export class DeleteArticle {
    static readonly type = '[Catalogue] Delete article';
    
    constructor(public payload: Catalogue) {}
}