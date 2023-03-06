import { CharacterDetailComponent } from './../characters/character-detail/character-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [

            {
                path: '',
                component: CharacterDetailComponent
            },
            {
                path: ':characterId',
                component: CharacterDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule { }