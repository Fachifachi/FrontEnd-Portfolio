import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerprincipalComponent } from './bannerprincipal.component';

describe('BannerprincipalComponent', () => {
  let component: BannerprincipalComponent;
  let fixture: ComponentFixture<BannerprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
