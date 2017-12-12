import Root from '../ui/Root';

function errorLoading(err) {
  console.error(err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  component: Root,
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        getComponent: (location, cb) => {
          System.import('../ui/Home').then(loadRoute(cb)).catch(errorLoading);
        }
      },
    },
    {
      path: 'posts',
      getComponent: (location, cb) => {
        System.import('../posts/pages/PostListPage').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    {
      path: 'posts/:postId',
      getComponent: (location, cb) => {
        System.import('../posts/pages/PostFullPage').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: 'add',
      getComponent: (location, cb) => {
        System.import('../posts/pages/AddPostPage').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: '*',
      getComponent: (location, cb) => {
        System.import('../ui/MissingPage').then(loadRoute(cb)).catch(errorLoading);
      }
    },
  ]
};

