import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"formaTitle"
})

export class formaTitlePipe implements PipeTransform{
    transform(value:string) : string{
        switch (value) {
            case "DEPOSIT_ACCOUNT":
              return "Cuenta deposito"
            case "CREDIT_CARD":
              return "Tarjeta de credito"
            case "CREDIT":
              return "Credito"
            case "CERTIFIED_DEPOSIT_TERM":
              return "Certificado de deposito"
            case "CURRENT_ACCOUNT":
              return "Cuenta actual"
            default:
            return ""
        }
    }
}