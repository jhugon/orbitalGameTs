# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [v1.0.0](https://github.com/jhugon/orbitalGameTs/releases/tag/v1.0.0) - 2022-08-31

- [`923b96a`](https://github.com/jhugon/orbitalGameTs/commit/923b96aee3ef2f1993ee893f7055a7104a36d382) Merge pull request #5 from jhugon/canvas2d
- [`7b4fd39`](https://github.com/jhugon/orbitalGameTs/commit/7b4fd3915f6342464bd1525ddab7813dd2da0f8c) feat(spaceobject): make thrust a get method
- [`ff24ff4`](https://github.com/jhugon/orbitalGameTs/commit/ff24ff4bab2b9b9dfe9f07ae28239ec1a6537d88) feat(spaceobject): change to just a single update method
- [`fadea50`](https://github.com/jhugon/orbitalGameTs/commit/fadea502d8912ab6696e89bd191c711c60188495) feat: space object accelerates toward mouse click
- [`8ec8527`](https://github.com/jhugon/orbitalGameTs/commit/8ec8527d505fa6c4d2e45aef30f71c4a55f661c5) feat!: Added src/ui/gameui.ts and moved canvas stuff in there
- [`e06acb4`](https://github.com/jhugon/orbitalGameTs/commit/e06acb4becaffeed84e48a0098786325d3cd416a) refactor: move SpaceObjectUI into own file in src/ui/
- [`54edd27`](https://github.com/jhugon/orbitalGameTs/commit/54edd27c39f5d8af9f58a13563796980c417a48d) Merge pull request #4 from jhugon/vector
- [`33f410d`](https://github.com/jhugon/orbitalGameTs/commit/33f410da7a31e1c5b9989255775a4bb38dea32ec) test(vector): add remaining tests--100% coverage
- [`ed86d00`](https://github.com/jhugon/orbitalGameTs/commit/ed86d000231f419aa02f8e50b3879bf1fa26a1ce) refactor(vector): moved x1, x2, etc. out as globals
- [`abdbe00`](https://github.com/jhugon/orbitalGameTs/commit/abdbe004a2fe7223d4b50d0bbccef1d6987d0148) feat(vector): change magnitude, angleDegrees, angleRadians to getters
- [`5e28b61`](https://github.com/jhugon/orbitalGameTs/commit/5e28b6131010ee78bb51e1d790962dc69ffd8f44) test(vector): added tests for add, subtract, mag, angle, cstr
- [`03153a1`](https://github.com/jhugon/orbitalGameTs/commit/03153a18826314bbe0ad93a63bd57115f20e463e) fix: got rid of lint error about losing precision at runtime in main
- [`70a396f`](https://github.com/jhugon/orbitalGameTs/commit/70a396f7c1a293dd5646c204ecd7e6d450a66525) feat(vector): added angle methods
- [`5a40b8e`](https://github.com/jhugon/orbitalGameTs/commit/5a40b8e737d85053844aa59b19980c22a94a52ff) feat(vector): add static methods for operations
- [`e8281a9`](https://github.com/jhugon/orbitalGameTs/commit/e8281a980e55d7356c46600cb19a2944987e5c7a) feat(vector): added modifier methods
- [`768e12e`](https://github.com/jhugon/orbitalGameTs/commit/768e12ec2314da24da472302b7dfeae5e72412b4) fix: some build and lint errors
- [`25c2e76`](https://github.com/jhugon/orbitalGameTs/commit/25c2e7658a1acf2ab99a5a960b323379791f1988) fix: forgot to add src/utils/vector.ts
- [`664eefb`](https://github.com/jhugon/orbitalGameTs/commit/664eefb07f3f49c489b34e93ad57d1ae3e81b0be) feat: Working on drawing SpaceObjectUI in canvas
- [`21df8ff`](https://github.com/jhugon/orbitalGameTs/commit/21df8ff5fdbceccdf532ec33e4b5ab7de3a013f0) feat!: Using classes now instead of interfaces
- [`63c549c`](https://github.com/jhugon/orbitalGameTs/commit/63c549c42599d771965c63eb54a7820235aa61e8) feat: added src/view/sprite.ts with interface and init
- [`be53f03`](https://github.com/jhugon/orbitalGameTs/commit/be53f036d26af92e01a32f6cfa1b7c2770171faa) fix: build works now
- [`57e02b9`](https://github.com/jhugon/orbitalGameTs/commit/57e02b9622339d3c1a63fc24e853a1aa9e774910) feat!: basic canvas code in main now

## [v0.4.0](https://github.com/jhugon/orbitalGameTs/releases/tag/v0.4.0) - 2022-08-30

- [`fef7073`](https://github.com/jhugon/orbitalGameTs/commit/fef70734915e9966d5d308b77ee7419e8a1fd5e5) feat: added updatePositionVelocity to spaceobject

## [v0.3.0](https://github.com/jhugon/orbitalGameTs/releases/tag/v0.3.0) - 2022-08-30

- [`7b24fa5`](https://github.com/jhugon/orbitalGameTs/commit/7b24fa54325fb6dacc90d5c592af42d59ef26a82) Merge pull request #1 from jhugon/eslint-ts
- [`00ac6d6`](https://github.com/jhugon/orbitalGameTs/commit/00ac6d6d7c5ef1af0c169802d782128c2b4080b5) ci: add build to CI and make test lint
- [`641c6b9`](https://github.com/jhugon/orbitalGameTs/commit/641c6b9e7048bc089391f7427f5ddcb22ca07630) ci: add linting to CI
- [`69babb1`](https://github.com/jhugon/orbitalGameTs/commit/69babb1eced48832505694501553b73ab12ff030) feat: eslint now requires type checking
- [`b9f4683`](https://github.com/jhugon/orbitalGameTs/commit/b9f4683ed5c86f2e927526b79923bcdc7a5115e4) feat: setup eslint-typescript

## [v0.2.1](https://github.com/jhugon/orbitalGameTs/releases/tag/v0.2.1) - 2022-08-30

- [`f339a81`](https://github.com/jhugon/orbitalGameTs/commit/f339a811c8b27ea1026b45bcac7f9ff1887cc830) fix(ci): run on pushes to main not master
- [`ea82106`](https://github.com/jhugon/orbitalGameTs/commit/ea821066c8219bc537bdd3b83beddd20a6f3bf2b) ci: added Jest test runner in CI
- [`4413708`](https://github.com/jhugon/orbitalGameTs/commit/4413708945e0f6fde8b8cf1346dd9c3638a60775) test: added jest unit testing

## [v0.2.0](https://github.com/jhugon/orbitalGameTs/releases/tag/v0.2.0) - 2022-08-30

- [`0594f29`](https://github.com/jhugon/orbitalGameTs/commit/0594f2918aef15cc3304bc7db45eb4bd76afcbb6) feat: added src/model/spaceobject.ts

## [v0.1.0](https://github.com/jhugon/orbitalGameTs/releases/tag/v0.1.0) - 2022-08-30

- [`9715879`](https://github.com/jhugon/orbitalGameTs/commit/9715879bcedcfc3e25773019a783d0871f199383) feat: added README, LICENSE, pre-commit, and uplift configs
- [`42091f2`](https://github.com/jhugon/orbitalGameTs/commit/42091f28a35384487fb540f3eb6d83b0a9686de8) initial commit of vite-vanilla-ts template
