$(function() {
  var $trigger = $('#js-trigger');
  var $wrapper = $('.bg-story');
  var $afterContents = $('#js-after');

  $trigger.on('click', function() {
      $trigger.hide();
      $wrapper.addClass('bg-none');
      $afterContents.fadeIn('slow');
  });
});