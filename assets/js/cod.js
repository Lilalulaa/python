const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}


 
 $(function() {
  
 $(window).scroll(function() {
  
 if($(this).scrollTop() != 0) {
  
 $('#toTop').fadeIn();
  
 } else {
  
 $('#toTop').fadeOut();
  
 }
  
 });
  
 $('#toTop').click(function() {
  
 $('body,html').animate({scrollTop:0},800);
  
 });
  
 });
  
