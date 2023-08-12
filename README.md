# Kore-Query

A library built on @tanstack/react-query to increase ease of use, control, and efficiency

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[A deployed version can be viewed here.]()

---

## Contents

- [Kore-Query](#kore-query)
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
import {Korios, useReactQuery, useReactQueryContext} from "kore-query";
import React, {Suspense} from "react";

function Container({children, ...props}) {
  const dashboards = Korios.asyncerrator({
    url: "/api/dashboards",
    params: {populate: "*"},
    method: "GET",
    options: {withCredentials: true},
  });
  const {data, isLoading, error} = useReactQuery({
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