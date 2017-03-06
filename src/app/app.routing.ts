import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemComponent } from './listagem/listagem.component';
import { InsercaoComponent } from './insercao/insercao.component';
import { EditarComponent } from './editar/editar.component';

const APP_ROUTES: Routes = [
{path: '', component: InsercaoComponent},
{path: 'listagem', component: ListagemComponent },
{path: 'editar', component: EditarComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

