# SalesLoft

An unofficial Node client for the SalesLoft API.

# Forked from github.com/alexleventer/node-salesloft

## Installation:

Use npm to install the package:

```shell
$ npm install salesloft-extended
```

## Example Usage:

```javascript
import { SalesLoft } from 'salesloft'
const sl = new SalesLoft('YOUR_API_KEY') // Works with oauth creds as well
sl.Me.list().then((results) => {
	console.log(`Me results: ${results}`)
})
```
