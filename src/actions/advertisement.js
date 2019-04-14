import advertisements from "../apis/advertisements";
import history from '../history/history';

import {
  CREATE_ADVERTISEMENT,
  DELETE_ADVERTISEMENT,
  EDIT_ADVERTISEMENT,
  FETCH_ADVERTISEMENT,
  FETCH_ADVERTISEMENTS
} from "./types";

export const createAdvertisement = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await advertisements.post('/advertisements', { ...formValues, userId });

    dispatch({ type: CREATE_ADVERTISEMENT, payload: response.data});
    history.push('/profile');
};

export const fetchAdvertisements = () => async dispatch => {
  const response = await advertisements.get("/advertisements");

  dispatch({ type: FETCH_ADVERTISEMENTS, payload: response.data });
};

export const fetchAdvertisement = id => async dispatch => {
  const response = await advertisements.get(`/advertisements/${id}`);

  dispatch({ type: FETCH_ADVERTISEMENT, payload: response.data });
};

export const editAdvertisement = (id, formValues) => async dispatch => {
  const response = await advertisements.patch(`/advertisements/${id}`, formValues);

  dispatch({ type: EDIT_ADVERTISEMENT, payload: response.data });
  history.push('/profile');
};

export const deleteAdvertisement = id => async dispatch => {
  await advertisements.delete(`/advertisements/${id}`);

  dispatch({ type: DELETE_ADVERTISEMENT, payload: id });
  history.push('/profile');
};