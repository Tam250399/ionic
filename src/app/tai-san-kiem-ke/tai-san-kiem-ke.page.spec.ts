import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaiSanKiemKePage } from './tai-san-kiem-ke.page';

describe('TaiSanKiemKePage', () => {
  let component: TaiSanKiemKePage;
  let fixture: ComponentFixture<TaiSanKiemKePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiSanKiemKePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaiSanKiemKePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
