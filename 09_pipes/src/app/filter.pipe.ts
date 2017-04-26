import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
    // pure: false means that whenever we change data on the page our pipe will be re-calculated. This is not advisable unless really necessary because can cost quite a bit of performance time. To see the difference it makes, type jock into search bar and then click add server. When the server is added, the data going into the pipe changes and re-triggers the pipe calculation.
})

export class FilterPipe implements PipeTransform {

    transform(value: any, filterString: string, propName: string): any {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
