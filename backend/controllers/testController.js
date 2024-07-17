import asyncHandler from "../middleware/asyncHandler.js";

const testController = asyncHandler(async (req, res) => {
  res.send("this is a test route");
});

export { testController };
