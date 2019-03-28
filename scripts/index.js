
$('.post').on('click', function() {
    console.log('let us go to this post!')
})
// $ is correct! a costly transaction 👆🏾

$('#blogroll').on('click', function(event) {
    console.log('clicked on the blog')
})
// handling bubbling efficiently but not delegating

$('#blogroll').on('click', '.post h3', function(event) {
    console.log('clicked on the blog')
})
// good way
