$(function() {
  // hide navbar on links clicked
  $('nav .navbar-nav li a').each(function() {
    $(this).click(function() {
      $('nav .navbar-collapse').removeClass('show')
    })
  })
})