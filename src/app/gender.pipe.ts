import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  transform(username: string, gender?: string): string {
    if (!username) return '';

    if (gender?.toLowerCase() === 'male') {
      return `Mr. ${username}`;
    } else if (gender?.toLowerCase() === 'female') {
      return `Ms. ${username}`;
    } else {
      return username;
    }
  }
}
