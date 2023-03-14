import express,{Router} from "express";
import { HealtCheckController } from "./Controllers/HealthCheckController";
import { ItemController } from "./Controllers/ItemController";
import { ChoiceController } from "./Controllers/ChoiceController";
import { MonsterController } from "./Controllers/MonsterController";
import { ParagraphController } from "./Controllers/ParagraphController";
import { UserController } from "./Controllers/UserController";
import 'express-async-errors';

export const router:Router = express.Router();

//userController
router.get("/api/user/list", new UserController().listUsers);
router.post("/api/user", new UserController().createUser);
router.get("/api/user/:uid", new UserController().readUser);
router.put("/api/user/:uid", new UserController().updateUser);
router.delete("/api/user/:uid", new UserController().deleteUser);

//ParagraphController
router.get("/api/Paragraph/list", new ParagraphController().listParagraphs);
router.post("/api/Paragraph", new ParagraphController().createParagraph);
router.get("/api/Paragraph/:pid", new ParagraphController().readParagraph);
router.put("/api/Paragraph/:pid", new ParagraphController().updateParagraph);
router.delete("/api/Paragraph/:pid", new ParagraphController().deleteParagraph);

//MonsterController
router.get("/api/Monster/list", new MonsterController().listMonsters);
router.post("/api/Monster", new MonsterController().createMonster);
router.get("/api/Monster/:mid", new MonsterController().readMonster);
router.put("/api/Monster/:mid", new MonsterController().updateMonster);
router.delete("/api/Monster/:mid", new MonsterController().deleteMonster);

//ItemController
router.get("/api/Item/list", new ItemController().listItems);
router.post("/api/Item", new ItemController().createItem);
router.get("/api/Item/:iid", new ItemController().readItem);
router.put("/api/Item/:iid", new ItemController().updateItem);
router.delete("/api/Item/:iid", new ItemController().deleteItem);

//ChoiceController
router.get("/api/Paragraph/:pid/Choice/list", new ChoiceController().listChoices);
router.post("/api/Paragraph/:pid/Choice", new ChoiceController().createChoice);
router.get("/api/Paragraph/:pid/Choice/:cid", new ChoiceController().readChoice);
router.put("/api/Paragraph/:pid/Choice/:cid", new ChoiceController().updateChoice);
router.delete("/api/Paragraph/:pid/Choice/:cid", new ChoiceController().deleteChoice);


//healtcheckController
router.get("/api/health/database",new HealtCheckController().checkDatabaseConnection);