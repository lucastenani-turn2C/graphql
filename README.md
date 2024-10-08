Problemas que resolve

- Overfatching

  - Evitar retornar mais dados do que realmente precisa

- Underfatching
  - Evitar retornar menos dados do que realmente precisa

```gql
query {
  users {
    id
    name
    github

    addresses {
      city
      state
      country
    }
  }
}
```
