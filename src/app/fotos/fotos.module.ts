import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto/foto.component";

@NgModule({
    declarations: [ FotoComponent ],
    imports: [ HttpClientModule ],
    exports: [ FotoComponent ]
})
export class FotosModule {}