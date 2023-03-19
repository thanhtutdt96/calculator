# Project - _Paper Printing_

Built with Vue 3, Vite, SCSS, Eslint.

## Running on Local
### Development
- Change the `.env.example` to `.env`
- Start Vite dev server
```
yarn dev
```
### Unit Test
```
yarn test:unit
```
## Main Features

The following stories are implemented:
- [x] User is able to view the prices in a table of "Delivery in business days X Quantity".
- [x] User is able to select paper size (A4, A5, B5, etc.) and view the respective price table.
- [x] User can click the cell and select the price for the specified delivery in business days and quantity.
- [x] User can click "See more" to display more rows.
- [x] User can hover over price and check respective delivery in business days and quantity.
- [x] The prices are displayed in numbers formatted by adding a comma "," after every 3 digits of numbers + Unit test.

## License

    Copyright [2022] [Tu Pham]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
