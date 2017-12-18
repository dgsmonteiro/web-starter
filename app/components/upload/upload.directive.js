(function() {
  'use strict';

  angular
    .module('starter')
    .directive('ngFileModel', ngFileModel);

  ngFileModel.$inject = ['$parse'];

  function ngFileModel($parse) {
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
      var model       = $parse(attrs.ngFileModel);
      var isMultiple  = attrs.multiple;
      var modelSetter = model.assign;

      element.bind('change', upload);

      /////////////////

      function upload () {
        var values = [];
        angular.forEach(element[0].files, cb);
        scope.$apply(scopeApply);
      }

      function scopeApply (values) {
        if (isMultiple) {
          modelSetter(scope, values);
        } else {
          modelSetter(scope, values[0]);
        }
      }

      function cb (item, values) {
        var value = {
          name: item.name,
          size: (item.size / 1000000).toFixed(2),
          url: URL.createObjectURL(item),
          _file: item
        };

        values.push(value);
      }
    }
  }
})();
