import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FerramentasPage } from './ferramentas.page';

describe('FerramentasPage', () => {
  let component: FerramentasPage;
  let fixture: ComponentFixture<FerramentasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerramentasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FerramentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
