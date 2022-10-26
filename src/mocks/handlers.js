// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Get MOCK weather API
  rest.get("https://api.open-meteo.com/v1/forecast", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ hourly: { time: [], temperature_2m: [99, 99, 100] } }));
  }),
];
