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
router.get("/api/users", new UserController().listUsers);
router.post("/api/users", new UserController().createUser);
router.get("/api/users/:uid", new UserController().readUser);
router.put("/api/users/:uid", new UserController().updateUser);
router.delete("/api/users/:uid", new UserController().deleteUser);

//ParagraphController
router.get("/api/Paragraphs", new ParagraphController().listParagraphs);
router.post("/api/Paragraphs", new ParagraphController().createParagraph);
router.get("/api/Paragraphs/:pid", new ParagraphController().readParagraph);
router.put("/api/Paragraphs/:pid", new ParagraphController().updateParagraph);
router.delete("/api/Paragraphs/:pid", new ParagraphController().deleteParagraph);

//MonsterController
router.get("/api/monsters", (req,res) => {throw ("not implemented");});
router.get("/api/paragraph/:pid/Monsters", new MonsterController().listMonsters);
router.post("/api/Monster/paragraph/:pid/monsters", new MonsterController().createMonster);
router.get("/api/Monsters/:mid", new MonsterController().readMonster);
router.put("/api/Monsters/:mid", new MonsterController().updateMonster);
router.delete("/api/Monsters/:mid", new MonsterController().deleteMonster);

//ItemController
router.get("/api/Items", (req,res) => {throw ("not implemented");});
router.get("/api/Paragraph/:pid/Items", new ItemController().listItems);
router.post("/api/Paragraph/:pid/Items", new ItemController().createItem);
router.get("/api/Items/:iid", new ItemController().readItem);
router.put("/api/Items/:iid", new ItemController().updateItem);
router.delete("/api/Items/:iid", new ItemController().deleteItem);

//ChoiceController
router.get("/api/Paragraph/:pid/Choices", new ChoiceController().listChoices);
router.post("/api/Paragraph/:pid/Choices", new ChoiceController().createChoice);
router.get("/api/Choices/:cid", new ChoiceController().readChoice);
router.put("/api/Choices/:cid", new ChoiceController().updateChoice);
router.delete("/api/Choices/:cid", new ChoiceController().deleteChoice);


//healtcheckController
router.get("/api/health/database",new HealtCheckController().checkDatabaseConnection);