// permiti usar useAppDispatch e useAppSelecto
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import type {
  AppState,
} from './store/store';

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
