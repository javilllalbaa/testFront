import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"format"
})

export class FormatPipe implements PipeTransform{

    transform(value:number) : string{
        var re = '\\d(?=(\\d{' + ( 3) + '})+' + (2 > 0 ? '\\.' : '$') + ')';
        return "$" + (new Number(value).toFixed(Math.max(0, ~~2)).replace(new RegExp(re, 'g'), '$&,')).toString()
    }
}