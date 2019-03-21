import '../elements/atoms/ff-sized-box';

import {
  requestData
} from '../app/actions';
import { store } from '../app/store';


store.dispatch(requestData());
