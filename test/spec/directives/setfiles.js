'use strict';

describe('Directive: setFiles', function () {

  // load the directive's module
  beforeEach(module('gCloudDashoardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<set-files></set-files>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the setFiles directive');
  }));
});
