import express from "express";
import {
  getSearchHistory,
  removeItemFromsearchHistory,
  searchMovie,
  serachPerson,
  serachTv,
} from "../controllers/search.controller.js";

const router = express.Router();
0
router.get("/person/:query", serachPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", serachTv);

router.get("/history",getSearchHistory);
router.delete("/history/:id", removeItemFromsearchHistory);

export default router;
