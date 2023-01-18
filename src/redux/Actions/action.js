import { SET_ADDRESS } from "../Types/types";

export const createAddressBook = (payload) => async (dispatch) => {
  console.log(JSON.stringify(payload));
  try {
    const response = await fetch(`https://hairmarket.ng/api/v1/address-books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // "Authorization": "Bearer Token here"
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (
      (data.status_code >= 400 && data.status_code <= 500) ||
      data.success === false
    ) {
      console.log(data.status_code, " ", data.message);
    } else {
      dispatch({
        type: SET_ADDRESS,
        payload: data.data,
      });
      //   return data;
    }
  } catch (error) {
    console.log(error);
  }

  // return your data and type as dispatch to reducer
};
