import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
   selector: 'app-banner',
   templateUrl: './banner.component.html',
   styleUrls: ['./banner.component.scss'], // no incluye colors y fontstyles ( esos van en el theming styles )
})
export class BannerComponent implements OnInit {
   @Input() message = '';

   // para pasar el color del background como type="info" ( o los estilos q quiera  definidos en banner.component.scss-theme.scss )
   // <app-banner message="Holi Hola" type="info"></app-banner>
   @Input() type: 'success' | 'info' | 'warn' | 'none' = 'none';
   @HostBinding('class') get hostClass() {
      if (this.type !== 'none') {
         return `app-banner-${this.type}`;
      }

      return 'none';
   }

   constructor() {}

   ngOnInit(): void {}
}
