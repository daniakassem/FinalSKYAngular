import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true, // This makes the pipe standalone
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!search) return value;

    const regex = new RegExp(`(${search})`, 'gi'); // Case-insensitive search
    return value.replace(regex, `<span class="highlight">$1</span>`);
  }
}
