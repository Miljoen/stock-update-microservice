[![Software License][ico-license]](LICENSE.md)

# Stock Update Microservice

Microservice for sending stock related updates.

Examples are placed orders or placed reservations (item is basket)

The purpose of this project is to offload any GraphQL Subscription traffic (Websockets) to a dedicated microservice.

## Technology

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

See package.json for full list.

## Installation (you can copy and paste all of this in your terminal)

``` bash
git clone git@github.com:Miljoen/stock-update-microservice.git
cd stock-update-microservice
cp .env.example .env
nvm use
npm install
npm run start
```

Visit [127.0.0.1:4000/graphql](127.0.0.1:4000/graphql)

## Credits

- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/czim/laravel-paperclip.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[link-contributors]: ../../contributors
