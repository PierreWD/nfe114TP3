import { AddArticle } from "./Catalogue.action";
import { Catalogue } from "./Catalogue";
import { State,Action,Selector,StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface StateArticle {
    panier: Catalogue[];
}

@State<StateArticle>({
    name: 'panier',
    defaults: {
        panier: []
    }
})

@Injectable()
export class ArticleState {
    @Selector()
    static getPanier(state: StateArticle) {
        return state.panier;
    }

    @Action(AddArticle)
        add({getState, patchState }:
    StateContext<StateArticle>, { payload }: AddArticle) {    
        const state = getState();
        patchState({
            panier: [...state.panier, payload]
        });
    }   
}

