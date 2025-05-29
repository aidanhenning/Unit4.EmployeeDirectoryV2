import express from "express";

const router = express.Router();

const employees = [];

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ error: 'Invalid or missing "name" in request body.' });
  }

  const newEmployee = {
    id: employees.length,
    name,
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

export default router;
