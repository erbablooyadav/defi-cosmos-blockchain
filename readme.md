# cognizantblockchain
**cognizantblockchain** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

The `serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Our blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

I have scaffolded a React.js-based web app in the `react` directory. Run the following commands to install dependencies and start the app:

```
cd react
npm install
npm run dev
```

## Release
To release a new version of our blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of our blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/erbablooyadav/cognizant-blockchain@latest! | sudo bash
```
`username/cognizant-blockchain` should match the `username` and `repo_name` of the GitHub repository to which the source code was pushed.

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
