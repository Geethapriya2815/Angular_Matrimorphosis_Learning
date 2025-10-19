import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true,
})
export class RatingPipe implements PipeTransform {
  transform(value: number | null | undefined, maxStars = 5): string {
    if (value == null || isNaN(Number(value))) return '';
    const filled = Math.max(0, Math.min(Math.round(Number(value)), maxStars));
    const empty = Math.max(0, maxStars - filled);
    return '★'.repeat(filled) + '☆'.repeat(empty);
  }
}
