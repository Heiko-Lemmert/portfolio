import { Component, inject } from '@angular/core';
import { SkillcardComponent } from './skillcard/skillcard.component';
import { SkillListService } from '../../services/skill-list.service';

@Component({
  selector: 'app-skilltree',
  imports: [SkillcardComponent],
  templateUrl: './skilltree.component.html',
  styleUrl: './skilltree.component.scss'
})
export class SkilltreeComponent {
   skillData = inject(SkillListService);
}
