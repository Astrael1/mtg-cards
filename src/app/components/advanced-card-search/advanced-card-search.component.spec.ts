import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCardSearchComponent } from './advanced-card-search.component';

describe('AdvancedCardSearchComponent', () => {
  let component: AdvancedCardSearchComponent;
  let fixture: ComponentFixture<AdvancedCardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedCardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
