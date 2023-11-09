import { Router } from "express";
const router = Router();

/* ================================= CONTROLLERS PRODUCTS ================================ */
import { CreateProductController } from "../controllers/controllerProduct/CreateProductController";
import { FindCategoryController } from "../controllers/controllerProduct/FindCategoryController";
import { controllerProductCategory, controllerProductId, FindProductController } from "../controllers/controllerProduct/FindProductController";
import { CreateProductCategoryController } from "../controllers/controllerProduct/CreateProductCategoryController";
import { CreateCategoryController } from "../controllers/controllerProduct/CreateCategoryController";
import { CreateProductWithExistCategory } from "../controllers/controllerProduct/CreateProductWithExistCategory";
import { CreateProductWithExistCategoryPut } from "../controllers/controllerProduct/ControllerProductCategoryPut";

/* ================================= CONTROLLERS USERS ================================ */
import { ControllerCreate } from "../controllers/controllerUser/controllerUserCreate";
import { ControllerFind } from "../controllers/controllerUser/controllerFind";
import { controllerUpdate } from "../controllers/controllerUser/controllerUpdate";
import { controllerDelete } from "../controllers/controllerUser/controllerDelete";
import { ControllerAuth } from "../controllers/controllerUser/controllerAuth";
import { ControllerLogin } from "../controllers/controllerUser/controllerLogin";
import { UserParamesId } from "../controllers/controllerUser/controllerParamesId";


/* ================================= CONTROLLERS ADRESS ================================ */
import { ControllerAdress } from "../controllers/controllerAdress/controllerAdressCreate";
import { ControllerAdressUpdate } from "../controllers/controllerAdress/controllerAdressUpdate"
import { ControllerAdressDeleteRelation } from "../controllers/controllerAdress/controllerAdressDelete";

/* ================================= CONTROLLERS COMPRA ================================ */
import { ControllerCompra } from "../controllers/controllerCompra/controllerCompraCreate"; 
import { ControllerCompraFind } from "../controllers/controllerCompra/controllerCompraFind";
import { ControllerCompraUpdate } from "../controllers/controllerCompra/controllerCompraUpdate";
import { ControllerCompraDelete } from "../controllers/controllerCompra/controllerCompraDelete";
import { ControllerCompraRelations } from "../controllers/controllerCompra/controllerCompraRelations";

const createCompra = new ControllerCompra()
const createCompraFind = new ControllerCompraFind()
const createCompraUpdate = new ControllerCompraUpdate()
const createCompraDelete = new ControllerCompraDelete()
const createCompraRealtion = new ControllerCompraRelations()

/* ================================= CONTROLLERS PAYMENT MERVADO PAGO ================================ */
import createPaymentMercadoPago from "../controllers/mercadoPagoPayment/MercadoPagoPayment";

/* ============================== OBJETO CRIADOS PARA ROTAS ====================== */
const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();
const createProductCategoryExistPut = new CreateProductWithExistCategoryPut();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();
const findProductCategory = new controllerProductCategory();
const findProductCategoryId = new controllerProductId();

/*=================================== ROTA DE PRODUCT =============================*/

router.post("/product", createProduct.handle);
router.get("/product", findProduct.handle);
router.get("/productcategory", findProductCategory.handle);
router.get("/productcategoryid/:id", findProductCategoryId.handle);

/*=================================== ROTA DE CATEGORY =============================*/
router.post("/category", createCategory.handle);
router.post("/categoryproduct", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);
router.get("/category", findCategory.handle);

/*=================================== ROTA DE USERS =============================*/

const findUser = new ControllerFind()
const findUserId = new UserParamesId()
const createUser = new ControllerCreate()
const createAdress = new ControllerAdress()
const deleteUser = new controllerDelete()
const deleteAdress = new ControllerAdressDeleteRelation()
const updateUser = new controllerUpdate()
const updateUserAdress = new ControllerAdressUpdate()
const authUser = new ControllerAuth()
const loginUser = new ControllerLogin()

/* ============================= ROTAS DE ACESSO =============================== */

router.post("/user", createUser.handle);
router.post("/login", loginUser.handle);
//router.use(authUser.handle);
router.put("/user", updateUser.handle);
router.delete("/user/:id", deleteUser.handle);
router.get("/", findUser.handle);
router.get("/user/:id", findUserId.handle);

/* ============================= ROTAS DE ACESSO =============================== */
router.post("/adress", createAdress.handle);
router.get("/adress", createAdress.handle);
router.put("/adressupdate", updateUserAdress.handle);
router.delete("/adress/:id", deleteAdress.handle);

/* ============================= ROTAS DE ACESSO =============================== */
router.post("/compra", createCompra.handle);
router.post("/comprarelations", createCompraRealtion.handle);
router.get("/compra", createCompraFind.handle);
router.put("/compraupdate", createCompraUpdate.handle);
router.delete("/compra/:id", createCompraDelete.handle);

/* ============================= ROTAS DE ACESSO =============================== */
router.post('/payment', createPaymentMercadoPago)

router.get("/payment", (req, res) => {
    res.status(200).send(
        `
        <h1 style="text-align: center; color: blue; font-size: 50px">Pagamento com mercado pago</h1>
        <hr/>
        <img style="margin: auto; dispaly: flex; width: 100%" src="https://s2-techtudo.glbimg.com/cBzv_-VyoyirkotBx76jb_m-FQA=/0x0:620x304/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/n/z8weK8QpCWDfcY8KFx4w/2013-08-27-mp.jpg" alt="img" />
        `
    );
});

export { router };
