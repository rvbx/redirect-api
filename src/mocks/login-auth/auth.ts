import { createErrorBody } from '../../_helpers/error.helper';

export class Auth {
  
  static check( auth: boolean | string | undefined, ctl?:any ): any {
    const errors = [];
    if ( !auth ) { errors.push( 'Authorization' ); } // Check Header Authorization

    if ( errors.length > 0 ) {
      return createErrorBody(true, 401, `O request não possui ${errors.join(' / ')}`);
    } else {
      return true;
    }
  }

}
