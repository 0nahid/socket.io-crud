import { Router } from "express";
import { userRouter } from "../Controllers/userController";
const router: Router = Router();

router.route("/").get(userRouter.getUser).post(userRouter.createUser);

router.route("/:id").patch(userRouter.updateUser).delete(userRouter.deleteUser);

router.route("/upload").post(userRouter.uploadProductImage);

export default router;
