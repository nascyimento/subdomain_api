const router = require("express").Router();
const DomainController = require("./controllers/DomainController");

router.get("/domains", DomainController.getAllDomains);
router.get("/domains/:id", DomainController.getOneDomain);
router.get("/subdomains/:id", DomainController.getSubdomains);

router.post("/domains", DomainController.createDomain)

module.exports = router;