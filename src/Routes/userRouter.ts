import { Router } from "express";
import { userRouter } from "../Controllers/userController";
import { uploader } from "./../middleware/uploader";
const router: Router = Router();

router.route("/").get(userRouter.getUser).post(userRouter.createUser);

router.route("/:id").patch(userRouter.updateUser).delete(userRouter.deleteUser);

router.post("/upload", uploader.array("image"), userRouter.uploadProductImage);
export default router;
