'use strict';

describe('Directive: playVideo', function () {

  // load the directive's module
  beforeEach(module('gCloudDashoardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<play-video></play-video>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playVideo directive');
  }));
});
