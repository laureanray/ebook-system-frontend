import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {BookService} from '../../../../../../core/services/book.service';
import {Topic} from '../../../../../../core/models/topic';
import {BookEditorService} from '../../../../services/book-editor.service';
import {EditorState} from '../../../../../../core/models/editor-state';
import {Chapter} from '../../../../../../core/models/chapter';

@Component({
  selector: 'app-add-topic-modal',
  templateUrl: './add-topic-modal.component.html',
  styleUrls: ['./add-topic-modal.component.sass']
})
export class AddTopicModalComponent implements OnInit {
  isAdding = false;
  topicTitle = '';
  chapter: Chapter;
  disabled = true;

  constructor(
    public dialogRef: MatDialogRef<AddTopicModalComponent>,
    private bookService: BookService,
    private bookEditorService: BookEditorService) {
    this.bookEditorService.getCurrentChapter().subscribe((chapter: Chapter) => {
        this.chapter = chapter;
    });
  }

  ngOnInit(): void {
  }

  addTopic() {
    this.isAdding = true;
    const topic = new Topic();
    topic.topicTitle = this.topicTitle;
    topic.chapterId = this.chapter.id;

    this.bookService.addTopic(topic).subscribe(res => {
      console.log('adding topic');
      console.log(res);
      this.isAdding = false;
      this.dialogRef.close();
    });
  }

  change($event) {
    if ($event.key === 'Enter') {
      this.addTopic();
    }
    this.disabled = this.topicTitle.length <= 0;
  }
}
