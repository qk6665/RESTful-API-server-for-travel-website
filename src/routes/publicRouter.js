import Router from 'koa-router'
import PublicController from "../api/PublicController";

const router = new Router()

router.get('/getHomeResources', PublicController.getHomeResources)
router.get('/getCityResources', PublicController.getCityResources)
router.get('/getDetailResources', PublicController.getDetailResources)

export default router
