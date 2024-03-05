app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
       <h3>Reviews:</h3>
         <ul>
           <li v-for="(review, index) in reviews" :key="index">
             {{ review.name }} gave  this {{ review.rating }} stars
             <br/>
             "{{ review.review }}"
<<<<<<< HEAD
             <br/>
             Recommend this product to others: {{ review.recommend }}
=======
>>>>>>> 423522a0eef4c02a8a3aaecbd6e3e69651406417
           </li>
         </ul>
     </div>`
})