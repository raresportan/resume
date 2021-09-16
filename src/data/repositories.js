const Cache = require('@11ty/eleventy-cache-assets')
const orderBy = require('lodash/orderBy')

// if you want to display your most starred github repositories,
// change this to your username. if not, set it to false.
const YOUR_GITHUB_USERNAME = ''

/*
module.exports = async function () {
    const repos = [
        {
            name: 'Homepage',
            description: 'Homepage of Rares Portan, https://raresportan.com',
            html_url: 'https://github.com/raresportan/homepage'
        }
    ],

    return await Promise.resolve(repos);
}
*/


module.exports = async function () {
    const repos = [
        {
            name: 'Live JavaScript',
            description: 'JavaScript tutorial, completely editable with live feedback',
            html_url: 'https://github.com/raresportan/livejavascript'
        },
        {
            name: 'gatsby-plugin-twitter-card',
            description: 'Gatsby plugin that generates Twitter card images using a title',
            html_url: 'https://github.com/raresportan/gatsby-plugins'
        },
        {
            name: 'big-island-liberated-ts',
            description: 'A Typescript version of the "Big Island" game',
            html_url: 'https://github.com/raresportan/big-island-liberated-ts'
        },

    ];

    return repos;
    // if (!YOUR_GITHUB_USERNAME) {
    //     return []
    // }

    // try {
    //     console.log('Fetching GitHub repos...')
    //     const repos = await Cache(
    //         `https://api.github.com/users/${YOUR_GITHUB_USERNAME}/repos`,
    //         {
    //             duration: '1d',
    //             type: 'json'
    //         }
    //     )
    //     return orderBy(repos, 'stargazers_count', 'desc')
    // } catch (e) {
    //     console.log('Failed fetching GitHub repos')
    //     return []
    // }
}
