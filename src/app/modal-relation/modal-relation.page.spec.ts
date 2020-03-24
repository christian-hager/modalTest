import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRelationPage } from './modal-relation.page';

describe('ModalRelationPage', () => {
  let component: ModalRelationPage;
  let fixture: ComponentFixture<ModalRelationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRelationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRelationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
