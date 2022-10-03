import { uploader } from './../middleware/uploader';
import { Router } from "express";
import { userRouter } from "../Controllers/userController";
import { uploader } from "../middleware/uploader";
const router: Router = Router();

router.route("/").get(userRouter.getUser).post(userRouter.createUser);

router.route("/:id").patch(userRouter.updateUser).delete(userRouter.deleteUser);

<<<<<<< HEAD
router.post("/upload", uploader.array("image"), userRouter.uploadProductImage);
=======
router.route("/upload").post(uploader.array("image"), userRouter.uploadProductImage);

>>>>>>> 1578ec947a38c56fb36cb530145904dd159e1c6f
export default router;
