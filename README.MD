# Microfronts

## Tareas

- Al iniciar un nuevo mf en angular

```ts
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
```

adicionalmente en el app.module se agrega el EmptyRouteComponent

```ts
declarations: [AppComponent, EmptyRouteComponent];
```

- Zone (Se debe importar el script del cdn de zone para proyectos angular en el container)
- Para que las aplicaciones no se sobreescriban se debe modificar el selector como estandar
  pusimos bc-{proyecto}-{mf}
