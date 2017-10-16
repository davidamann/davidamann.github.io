(function() {
  Shepherd.on('start', function() {
    return GuidedTour.updateTour({
      started: GuidedTour.tour.started + 1
    });
  });

  Shepherd.on('complete', function() {
    return GuidedTour.updateTour({
      completed: GuidedTour.tour.completed + 1
    });
  });

}).call(this);
