import { useState } from "react";
import axios from "axios";
import { INPUT_FIELDS } from "../../variables";
import toast from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";


/** *
 * @typedef {Object} FormContext
 * @property {function} handleInputChange
 * @property {function} handleRadioChange
 * @property {function} handleOnSubmit
 * @property {object} formData
 */

/**
 * @returns {FormContext}
 */
const useFormContext = () => {
  const [formData, setFormData] = useState({ ...INPUT_FIELDS });
  const { getAccessTokenSilently } = useAuth0();

  const handleInputChange = (event) => {
    const { value, ...rest } = formData[event.target.id];
    setFormData({
      ...formData,
      [event.target.id]: {
        ...rest,
        value: event.target.value,
      },
    });
  };
  const handleRadioChange = (event) => {
    const { value, ...rest } = formData[event.target.name];
    console.log(value, rest);
    setFormData({
      ...formData,
      [event.target.name]: {
        ...rest,
        value: event.target.value,
      },
    });
  };

  const handleOnSubmit = async (data) => {
    const { candidate, id, availableNow, mainSkills, ...rest } = data;
    const serverUrl = process.env.REACT_APP_SERVER_URL

    try {
      const token = await getAccessTokenSilently();
      const headers = { headers: {
        Authorization: `Bearer ${token}`,
      }}
      const data = {
        candidate,
        id,
        info: { ...rest },
        availableNow,
        mainSkills,
      }
      const serverResponse = await axios
        .post(`${serverUrl}/interview/`, data, headers)

          console.log({
            "Response Status": {
              status: serverResponse.status,
              data: serverResponse.data,
            },
          });
          toast.success("Información guardada exitosamente", {
            position: "bottom-center",
          });
    } catch (err) {
      console.log({
        "Response Status": {
          status: err.status,
          data: err.data,
        },
      });
      toast.error(`Error al enviar el formulario:${err.data} `, {
        position: "bottom-center",
      });
    }

    return;
  };

  return { handleInputChange, handleRadioChange, handleOnSubmit, formData };
};

export default useFormContext;
