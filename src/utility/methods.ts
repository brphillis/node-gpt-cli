import axios, { AxiosResponse } from "axios";

export const getResponse = async (
  message: string,
  fileText?: string
): Promise<string> => {
  try {
    const response: AxiosResponse = await axios.post(
      "http://localhost:5000/chat",
      {
        message: message + (fileText || ""),
      }
    );

    if (response.status !== 200) {
      throw new Error("Something went wrong.");
    }

    const data = response.data;
    return data.firstResponse as string;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
