app.component('review-form', {
    template: 
    /*html*/
    `<form class="review-form" @submit.prevent="OnSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
<<<<<<< HEAD
    
    <br/>
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
=======
>>>>>>> 423522a0eef4c02a8a3aaecbd6e3e69651406417

    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
        name: '',
        review: '',
<<<<<<< HEAD
        rating: null,
        recommend: null
=======
        rating: null
>>>>>>> 423522a0eef4c02a8a3aaecbd6e3e69651406417
    }
  },
  methods: {
    OnSubmit() {
<<<<<<< HEAD
        if(this.name === "" || this.review === "" || this.rating === null || this.recommend === null) {
=======
        if(this.name === "" || this.review === "" || this.rating === null) {
>>>>>>> 423522a0eef4c02a8a3aaecbd6e3e69651406417
            alert("Please fill all review fields")
            return
        }

        let productReview = {
            name: this.name,
            review: this.review,
<<<<<<< HEAD
            rating: this.rating,
            recommend: this.recommend
=======
            rating: this.rating
>>>>>>> 423522a0eef4c02a8a3aaecbd6e3e69651406417
        }
        this.$emit('review-submitted', productReview)
        this.name = ''
        this.review = ''
        this.rating = null
<<<<<<< HEAD
        this.recommend = null
=======
>>>>>>> 423522a0eef4c02a8a3aaecbd6e3e69651406417
    }
  }
})