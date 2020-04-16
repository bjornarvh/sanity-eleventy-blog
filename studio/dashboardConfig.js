export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9845ca461f8a1463c9bf19',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1f4chjuz',
                  apiId: '646cfc2a-de17-4754-95ec-f73ceecc083a'
                },
                {
                  buildHookId: '5e9845ca1db36cfdeb4dc9d2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-fkwxqy2d',
                  apiId: 'e33a71c7-5a60-418a-9c2c-410d8314596d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjornarvh/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-fkwxqy2d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
