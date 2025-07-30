import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { consult_order } from '../../interface/models';
import { ApiService } from '../../services/api/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils/utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consult-order',
  imports: [HeaderComponent,FooterComponent,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './consult-order.component.html'
})
export class ConsultOrderComponent {

  constructor(private api:ApiService, private util:UtilsService){}

  consultData:consult_order[]=[];
  loader=false;
  error=false;

  fb = inject(FormBuilder);
  formSearchOrder: FormGroup = this.fb.group({
    codeOrder: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  })

  removeNonDigits(event: any) {
      let inputValue = event.target.value;
      inputValue = inputValue.replace(/\D/g, ''); // Reemplaza todos los caracteres no numéricos por vacío
      if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 12); // Solo permite los primeros 11 dígitos
      }
      event.target.value = inputValue;
      this.formSearchOrder.patchValue({ codeOrder: inputValue });
  }

  getInfoService(slug:string){
    return this.util.getServiceInfo(slug);
  }

  onSubmit(){

     if(this.formSearchOrder.valid){
      this.consultData =[];
      this.loader = true;
      const code_order: string = this.formSearchOrder.get("codeOrder")?.value
      this.api.consultOrder(code_order).subscribe({
          next: (data) => {
            console.log(data)
            this.consultData.push(data)
            console.log(this.consultData)
            this.loader = false;
          },
          error: (err) => {
            this.loader = false;
            this.error = true;
          }
        });
      this.formSearchOrder.reset();
     }

  }

}
