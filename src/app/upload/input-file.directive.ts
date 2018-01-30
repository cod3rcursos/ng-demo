import {Directive, HostListener} from '@angular/core'
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

@Directive({
    selector: 'input[type=file][ngModel],input[type=file][formControlName]',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: InputFileDirective, multi: true }
    ]
})
export class InputFileDirective implements ControlValueAccessor {

    @HostListener('change', ['$event.target.files'])
    onChange = (_) => {}

    @HostListener('blur')
    onTouched = () => {}

    writeValue(value) {}
    registerOnChange(fn: any) {
      this.onChange = fn
    }
    registerOnTouched(fn: any) {
      this.onTouched = fn
    }
}

//Based on https://embed.plnkr.co/aj6VjL5CbZuwHq1MoA8I/
