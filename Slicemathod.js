const str ='https://mobile-compare.s3.ap-southeast-2.amazonaws.com/plan/broadband/20/critical_info/document/1661150351upwards.png'
const files =str.length > 0 ? str.slice(str.length-3, str.length) : ''
 const pdf = files ? 'jpg' :"";
 console.log(pdf);  
