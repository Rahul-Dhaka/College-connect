const router = new express();

router.get('/test', (req,res)=>{
    res.send("test success");
})

module.exports =  router;