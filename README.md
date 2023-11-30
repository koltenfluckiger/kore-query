# Kore Query

![GitHub contributors](https://img.shields.io/github/contributors/koltenfluckiger/kore-query?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/koltenfluckiger/kore-query?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/koltenfluckiger/kore-query?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/koltenfluckiger/kore-query?style=for-the-badge)
[![LinkedIn][linkedin-shield]][linkedin-url]

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Kore-Query

A library built on @tanstack/react-query to increase ease of use, control, and efficiency

[Github Repo](https://github.com/koltenfluckiger/kore-query)

---

## Contents

- [Kore Query](#kore-query)
- [Kore-Query](#kore-query-1)
  - [Contents](#contents)
  - [About](#about)
  - [Installation](#installation)
  - [Examples](#examples)
  - [License](#license)
  - [Contributing](#contributing)
  - [Authors and Acknowledgments](#authors-and-acknowledgments)
  - [Contact Information](#contact-information)

---

## About

Kore-Query comes with custom hooks like mutations, prefetch, queries. It also provides custom providers, and a client built on Axios to use with React Query with Suspension.

---

<!-- ## User Story

---

## Acceptance Criteria

---

## Visuals

![]()

--- -->

## Installation

npm

```bash
npm i --save kore-query
```

yarn

```bash
yarn add kore-query
```

To clone the repo:

```bash
git clone https://github.com/koltenfluckiger/kore-query.git
```

---

---

## Examples

```javascript
import {Korios, useKoreQuery, useKoreQueryContext} from "kore-query";
import React, {Suspense} from "react";

function Container({children, ...props}) {
  const dashboards = Korios.asyncerrator({
    url: "/api/dashboards",
    params: {populate: "*"},
    method: "GET",
    options: {withCredentials: true},
  });
  const {data, isLoading, error} = useKoreQuery({
    queryKey: ["dashboard"],
    queryFunc: dashboards,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <div>{data}</div>;
  }
}
```

---

## License

License used for this project - MIT

- For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing

To contribute to this application, create a pull request.
Here are the steps needed for doing that:

- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

  Following a code review, your feature will be merged.

---

## Authors and Acknowledgments

Kolten Fluckiger

---

## Contact Information

- GitHub Username: koltenfluckiger
- GitHub Email: <wrtunder@gmail.com>
- [Github Repo](https://github.com/koltenfluckiger/kore-query)

---

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/koltenfluckiger
