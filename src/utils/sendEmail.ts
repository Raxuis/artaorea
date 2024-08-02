import { z } from "zod";
import { ContactSchema } from "./validation";

export function sendEmail(data: z.infer<typeof ContactSchema>) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then(err => Promise.reject(err.message));
      }
      return res.json();
    })
    .then((response) => {
      return response.message;
    });
}
