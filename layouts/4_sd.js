
import {
  requestData
} from '../app/actions';
import { store } from '../app/store';


store.dispatch(requestData());
