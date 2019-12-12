# Whitelist Resource
## Install
Put the repository inside **cfx-server-data/[local]** and rename **whitelist/** 

- Install dependencies
  ```js
  npm install
  ```
- Put api address in **/src/server/config.js**
  ```js
  const apiUrl = "192.168.1.12";
  const apiPort = 8050;
  ```

## Using
  **Events**
  - _handcheck_
    - _getProfil_
  - _playerConnecting_
  - _playerDropped_
  - _getPing_
    - _getPong_

### Dependencies
 - moment (format time)
 - axios (async http requests)
 - chalk (color in terminal for logs)