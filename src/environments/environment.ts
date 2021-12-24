// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import { ListTaiSan } from "src/app/models/taisan";

// The list of file replacements can be found in `angular.json`.
const intialListTs :ListTaiSan = {
Data :[],
GuidKiemKe:''
}
export const environment = {
  production: false,
  Guid :'' ,
  apiUrl :'http://taisancong.csdltc.vn:4041',
  ListTaiSan: intialListTs
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
