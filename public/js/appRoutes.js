angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home/index.html',
      controller: 'MainController',
      title: 'Trung Tâm Ngoại Ngữ ĐH Bách Khoa'
    })
    .when('/ve-chung-toi/:sub_category_slug?/:post_slug?', {
      templateUrl: 'views/partials/post/post_detail.html',
      controller: 'PostController',
      title: 'Trung Tâm Ngoại Ngữ ĐH Bách Khoa',
      categorySlug: "ve-chung-toi",
      menu: 0
    })
    .when('/thi-quoc-te/:sub_category_slug?/:post_slug?', {
      templateUrl: function (params) {
        if (params.sub_category_slug == "lich-thi-quoc-te") {
          return 'views/partials/lich_thi_quoc_te.html';  
        /*} else if (params.sub_category_slug == "cau-lac-bo-UTEC" || params.sub_category_slug == "cau-lac-bo-BKDEC") {
          return ;
        } else {
          return ;*/
        };

      },
      controller: 'PostController',
      title: 'Trung Tâm Ngoại Ngữ ĐH Bách Khoa',
      categorySlug: "thi-quoc-te",
      menu: 3
    })
    .when('/hot-news/:sub_category_slug?/:post_slug?', {
      // templateUrl: 'views/partials/thong_bao_hot_news.html',
      templateUrl: function (params) {
        if (params.sub_category_slug == "thong-bao-hot-news") {
          return 'views/partials/post/hot_news/thong_bao_hot_news.html'
        } else if (params.sub_category_slug == "cau-lac-bo-UTEC" || params.sub_category_slug == "cau-lac-bo-BKDEC") {
          return 'views/partials/post/hot_news/club.html'
        } else {
          return ;
        };

      },
      controller: 'PostController',
      title: 'Trung Tâm Ngoại Ngữ ĐH Bách Khoa',
      categorySlug: "hot-news",
      menu: 4
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}]);
