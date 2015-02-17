$(function() {
  var $trigger = $('#js-trigger');
  var $wrapper = $('#js-story-section');
  var $afterContents = $('#js-after');

  $trigger.on('click', function() {
      $trigger.hide();
      $wrapper.addClass('story-section--is-expanded');
      $afterContents.fadeIn('slow');
  });
});