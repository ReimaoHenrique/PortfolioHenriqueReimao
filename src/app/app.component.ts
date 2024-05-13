import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { SobreComponent } from './components/sobre/sobre.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      MenuComponent,
      SobreComponent,
      ServicosComponent,
      ProjetosComponent,
      ContatoComponent
    ]
})
export class AppComponent {
  title = 'PortfolioHenriqueReimao';
}
