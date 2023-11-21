import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListskClienteComponent } from './listsk-cliente.component';

describe('ListskClienteComponent', () => {
  let component: ListskClienteComponent;
  let fixture: ComponentFixture<ListskClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListskClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListskClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
