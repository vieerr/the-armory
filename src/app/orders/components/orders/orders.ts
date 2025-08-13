import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  gameTiedScroll,
  gameCheckMark,
  gameCancel,
  gameTreasureMap,
  gameShipWheel,
} from '@ng-icons/game-icons';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './orders.html',
  styles: [``],
  providers: [
    provideIcons({
      gameTiedScroll,
      gameCheckMark,
      gameCancel,
      gameTreasureMap,
      gameShipWheel,
    }),
  ],
})
export class Orders {}
