import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent;
  beforeAll(()=>{
    console.log('beforeAll Se Ejecuta Al Inicio');
    
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    console.log('beforeEach Ejecutado');
    
    appComponent = new AppComponent();    
  }));

  afterEach(()=>{
    console.log('AfterEach Ejecutado')
  });

  afterAll(()=>{
    console.log('afterAll Se Ejecuta Al Final');
    
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('El valor de myVar debe ser Hola Mundo', ()=>{
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola mundo');
  });
  it('la variable saludo debe contener Luis Fernando',()=>{
    const valor = appComponent.saludo;
    expect(valor).toContain('Luis Fernando');
  });
  
  it('debe Retornar True',()=>{
    const respuesta = appComponent.par(44);
    expect(respuesta).toBeTruthy();
  });
  it('debe Retornar False',()=>{
    const respuesta = appComponent.par(43);
    expect(respuesta).toBeFalsy();
  });
});
