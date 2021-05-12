import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"creditFormat"
})

export class creditFormatPipe implements PipeTransform{
    transform(value:number) : string{
        if(value.toString().length > 13){
            return "**** **** **** **" + /.{2}$/.exec(value.toString())
        }else{
            return value.toString()
        }
    }
}