import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.css']
})
export class ReviewModalComponent {
  @Input() productId: string = ''; // product ID passed from parent component
  reviewForm: FormGroup;
  reviewError: string = '';

  constructor(private fb: FormBuilder, private _ReviewsService: ReviewsService) {
    this.reviewForm = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(100)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  submitReview() {
    if (this.reviewForm.valid) {
      // Call the add review function
      this._ReviewsService.addReview(this.productId, this.reviewForm.value).subscribe({
        next: (res) => {
          console.log('Review submitted successfully');
          // You can add an event emitter here to close the modal after success
        },
        error: (err) => {
          this.reviewError = err.error?.message || 'Error submitting review';
        }
      });
    } else {
      this.reviewError = 'Please fill in all fields correctly';
    }
  }
}
