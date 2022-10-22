import { Component } from '@angular/core';
import { DiaryEntry } from 'src/app/diary-entry.model';
import { MemoryComponent } from '../../components/memory/memory.component';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})

export class MainPageComponent {
  diaryEntryList: DiaryEntry[] = [];

}
