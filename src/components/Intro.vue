<template>
  <div class="intro">
     <div class="container">
          <div class="row">
          <div class="col-md-1"></div>
          <!-- <div class="col-md-1"></div> -->
          <div class="col-md-10 text-center">
              <h2>Genesis <span class="orange">Investment Company</span></h2>
              <hr>
              <p>Genesis Investment Nigeria Ltd is an indigenous company with experts for sustainability in business practices. We have vested interests in Distributions of creal marketing, deals, currency trading and other profitable ways to make interest.
            Genesis Investment Nigeria Ltd is an online and offline network marketing organization and is born out of the need to build up people financially. We are passionate about empowering people and liberating them from poverty to enable them meet their financial freedom with our proven system.

            We offer the best way that is Madeline easy to deposit money into your Wallets!

            Invest your money today and get 50% interest within 4 days using our investment programme. Buy and Sell Bitcoin with the leading bitcoin exchange provider, we also grant load to our customers who have successfully crossed their top up level which is 50k.

            TAKE NOTE! GENESIS INVESTMENT PROGRAMME SUPPORTS 100% INVESTMENT RECOMMITMENT POLICY FOR ALL NEW MEMBERS.</p>
               <router-link to="/signup" class="intro-btn animated zoomIn animate3d">Get Started <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
          <div class="col-md-1"></div>
      </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.intro{
    padding: 4rem 0;
    // background: $primary-color;
    // .image__holder::after{
    //     content: "";
    //     width: 200px;
    //     position: absolute;
    //     margin: 0 auto;
    //     height: 100%;
    //     width: 95%;
    //     background: transparent;
    //     border: 5px solid $primary-color;
    //     left: 50px;
    //     right: 0;
    //     bottom: 30px;
    //     z-index: -10;
    // }
    .image{
        border-radius: 4px;
    }
    h2{
        font-weight: bolder;
        font-size: 2.5rem;
    }
//       h2::after {
// 	content: "";
// 	width: 200px;
// 	position: absolute;
// 	margin: 0 15px;
// 	height: 5px;
// 	background: $secondary-color;
// 	left: 0;
// 	right: 0;
//     top: 150px;
// }
    p{
        line-height: 2.2;
        padding-top: .5rem;
        font-size: .95rem;
        padding-bottom: 1.5rem;
    }
    // .orange{
    //     color: $secondary-color;
    // }
    hr{
        background: #fff;
        opacity: .7;
    }
    .intro-btn {
      color: #fff;
      background: $secondary-color;
      padding: 1.2rem 2rem;
      text-align: center;
      font-size: .9rem;
      font-weight: normal;
      text-decoration: none;
      border-radius: 50px;
      text-transform: capitalize;
    }
}

//Media Queries
@media only screen and (max-width: 600px){
    h2{
        font-size: 1.8rem !important;
        line-height: 1.5 !important;
    }
}
</style>